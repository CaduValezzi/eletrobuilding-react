import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
// import ReCAPTCHA from "react-google-recaptcha";


import { SectionMenuContact } from "../components/contact/section_menu";
// import { SectionMenuGeneric } from "../components/generic/section_menu";


const Maps = styled.iframe`
    width:100%;
    height:50vh;  
     
`

export const Contact = () => {

    const name = document.getElementById("from_name");
    const email = document.getElementById("reply_to");
    const message = document.getElementById("message");
    const numberPhone = document.getElementById("phone");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ltywki5', 'template_e4zqh7x', form.current, 'vu1cixeqH75TR5QAg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });



    };




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
                                                placeholder="Exemplo: Fulano da Silva (nome fictício)" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="reply_to" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="reply_to" name="reply_to"
                                                aria-describedby="emailHelp"
                                                placeholder="Exemplo: fulano.silva@email.com (email fictício)" />
                                            <div id="emailHelp" className="form-text"> Nunca compartilharemos seu e-mail com mais ninguém.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">WhatsApp</label>
                                            <input type="tel"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                aria-describedby="tel" placeholder="Exemplo: 1149914110" />
                                            <div id="emailHelp" className="form-text"> Nunca compartilharemos seu whatsapp com mais ninguém.</div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Mensagem</label>
                                            <textarea className="form-control" id="message" rows="5" name="message"
                                                placeholder="Deixe aqui sua mensagem" maxLength="500"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            value="Send"
                                            id="submit">Enviar</button>
                                    </div>
                                </form>
                            </section>
                        </main>


                        <section className="container my-4 p-5" id="maptalktous">
                            <div className="col-12 col-md-12 ">
                                <h3 className="display-8 w-75 mb-4">Onde Estamos?</h3>
                                <div className="text-center">
                                    <Maps src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14619.997647624885!2d-46.5427378!3d-23.6401921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce438d5b3062af%3A0x923f01d7b7d98273!2sEletro%20Building!5e0!3m2!1spt-BR!2sbr!4v1694616774078!5m2!1spt-BR!2sbr"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></Maps>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </div>



        </>
    );
}

