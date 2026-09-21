import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import type { ContactFormStatus } from "./types";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Missing .env.local — see README for the required NEXT_PUBLIC_EMAILJS_* vars.
      console.error(
        "EmailJS: variáveis de ambiente ausentes (NEXT_PUBLIC_EMAILJS_SERVICE_ID/TEMPLATE_ID/PUBLIC_KEY)."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS: falha ao enviar mensagem", error);
      setStatus("error");
    }
  }

  return { formRef, status, handleSubmit };
}
