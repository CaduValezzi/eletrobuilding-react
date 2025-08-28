import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
// import ReCAPTCHA from "react-google-recaptcha";


import { SectionMenuContact } from "../components/contact/section_menu";
// import { SectionMenuGeneric } from "../components/generic/section_menu";
const Textinput = styled.textarea`
    height: 10rem;
    resize: none;

`;

// const Maps = styled.iframe`
//     width:100%;
//     height:50vh;  
     
// `

export const Contact = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();

    const form = useRef();
    // console.log(name.gethtml);
    const sendEmail = (e) => {      
            e.preventDefault();
                let errorMessage = "";

                nameRef.current.value === "" && (errorMessage += "Por favor, preencha o campo de nome.\n");
                emailRef.current.value === "" && (errorMessage += "Por favor, preencha o campo de email.\n");
                phoneRef.current.value === "" && (errorMessage += "Por favor, preencha o campo de WhatsApp.\n");
                messageRef.current.value === "" && (errorMessage += "Por favor, preencha o campo de mensagem.\n");

                if (errorMessage) {
                    alert(errorMessage);
                    return;
                }else{
                emailjs.sendForm('service_ltywki5', 'template_e4zqh7x', form.current, 'vu1cixeqH75TR5QAg')
                .then((result) => {
                    console.log(result.text);
                    alert("Sucesso! Sua Mensagem foi enviada.")
                }, (error) => {
                    console.log(error.text);
                    alert("erro" + error)
                });
                }

                

        }
    const Whatsapp = (e) => {
        e.preventDefault();

        if (emailRef.current.value === "" || phoneRef.current.value === ""){
            alert("Preencha Email ou Whatsapp")
        } 
        else{
            const whatsappMessage = `Olá, meu nome é ${nameRef.current.value}.\n Meu email é ${emailRef.current.value} e meu WhatsApp é ${phoneRef.current.value}.\n Mensagem: ${messageRef.current.value}`;
            const whatsappUrl = `https://wa.me/551149914110?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, "_blank");
        }
    }


    return (
        <>
            <div className="container">
                <div className="row row-cols-2 pt-5">
                    <div className="col-12 col-md-3 my-5 left-menu pe-md-5">
                        <SectionMenuContact />
                    </div>
                    <div className="col-12 col-md-9 ps-md-5">
                        <main className="container my-4" id="formtalktous">
                            <section className="container p-5">
                                <h2 className="display-8 w-75 mb-4">Fale Conosco</h2>
                                <form onSubmit={sendEmail} ref={form} className="row row-cols-2" id="contact-form">
                                    <input type="hidden" name="contact_number" />
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label htmlFor="from_name" className="form-label">Nome</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="from_name"
                                                name="from_name"
                                                ref={nameRef}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="reply_to" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="reply_to" name="reply_to"
                                                aria-describedby="emailHelp"
                                                ref={emailRef}
                                            />
                                            <div id="emailHelp" className="form-text"> Nunca compartilharemos seu e-mail com mais ninguém.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">WhatsApp</label>
                                            <input type="tel"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                aria-describedby="tel"
                                                ref={phoneRef}
                                            />
                                            <div id="emailHelp" className="form-text"> Nunca compartilharemos seu whatsapp com mais ninguém.</div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Mensagem</label>
                                            <Textinput 
                                            className="form-control" 
                                            id="message" rows="5" 
                                            name="message"
                                            ref={messageRef}
                                            placeholder="Deixe aqui sua mensagem" maxLength="500"></Textinput>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            Mande por e-mail ou Whatsapp
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            value="Send"
                                            id="submit">
                                            E-mail
                                        </button>
                                        <button
                                            onClick={Whatsapp}
                                            className="btn btn-primary ms-4"
                                            value="Send"
                                            id="w-submit">
                                            Whatsapp
                                        </button>
                                        
                                    </div>
                                    
                                </form>
                                
                            </section>
                        </main>


                        {/* <section className="container my-4 p-5" id="maptalktous">
                            <div className="col-12 col-md-12 ">
                                <h3 className="display-8 w-75 mb-4">Onde Estamos?</h3>
                                <div className="text-center">
                                </div>

                            </div>
                        </section> */}
                    </div>
                </div>
            </div>
        </>
    );
}

