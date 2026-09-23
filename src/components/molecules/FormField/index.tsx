"use client";

import type { FormFieldProps } from "./FormField.types";
import { FORM_FIELD_BASE_CLASSES } from "./FormField.styles";
import S from "./styles.module.scss";

export function FormField({ label, name, type = "text", options, required }: FormFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-muted">
        {label}
        {required && <span className="text-volt-dim"> *</span>}
      </span>
      {type === "textarea" ? (
        <textarea name={name} required={required} className={`${FORM_FIELD_BASE_CLASSES} ${S.textarea__resize}`} />
      ) : type === "select" ? (
        <select
          name={name}
          required={required}
          className={`${FORM_FIELD_BASE_CLASSES} bg-graphite-950`}
        >
          <option value="">Selecione...</option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} name={name} required={required} className={FORM_FIELD_BASE_CLASSES} />
      )}
    </label>
  );
}
