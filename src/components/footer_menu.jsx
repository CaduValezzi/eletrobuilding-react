import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Footer = styled.footer`
    background-color:var(); 
    padding: 20px;
     ;
`
const FooterSection = styled.section`
    border-top: 2px solid var(--color-light-grey-2);
`
const Colunm = styled.ul`
    list-style: none;
`
const ColunmItens = styled.li`
    line-height: 2rem;
    &:hover{
        background-color: var(--color-light-grey-2);
        border-radius: 2px;
    }
`

export const FooterMenu = () => {
    var copyright = document.querySelector("#copyright")
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    copyright.innerHTML = "&copy;" + {anoAtual} + "Eletro Building. Todos os direitos reservados."

    return (
        <>
            <Footer className="container-fluid">
                <FooterSection className="container text-center text-md-start">
                    <div className="mt-5 row row-cols-1 row-cols-md-4">
                        <div className="col mb-4">
                            <h5 className="mb-4">Sobre Nós</h5>
                            <Colunm className="list-group">
                                <ColunmItens><Link to="/" >Sobre Nós</Link></ColunmItens>
                            </Colunm>
                            <Colunm className="list-group">
                                <ColunmItens><Link to="/blog" >Blog</Link></ColunmItens>
                            </Colunm>
                        </div>

                        <div className="col mb-4">
                            <h5 className="mb-4">Redes Sociais</h5>
                            <Colunm className="list-group">
                                <ColunmItens><Link
                                    to="https://www.instagram.com/eletro.building"
                                    target="blank"><i className="bi bi-instagram "></i> Instagram</Link>
                                </ColunmItens>
                                <ColunmItens><Link
                                    to="https://www.linkedin.com/company/eletro-building/about/"
                                    target="blank"><i className="bi bi-linkedin"></i> Linkedin</Link>
                                </ColunmItens>
                                <ColunmItens><Link
                                    to="https://wa.me/+551149914110"
                                    target="blank"><i className="bi bi-whatsapp"></i> Whatsapp</Link>
                                </ColunmItens>
                            </Colunm>
                        </div>


                        <div className="col mb-4">
                            <h5 className="mb-4">Fale Conosco</h5>
                            <Colunm className="list-group">
                                <ColunmItens><a className="fs-6" href="mailto:contato@eletrobuilding.com.br">contato@eletrobuilding.com.br</a></ColunmItens>
                                <ColunmItens><a href="tel:1149914110"><i className="bi bi-telephone-fill"></i> (11) 4991-4110</a></ColunmItens>

                            </Colunm>
                        </div>
                        <div className="col mb-4">
                            <h5 className="mb-4">Conheça Também</h5>
                            <Colunm className="list-group">
                                <ColunmItens><Link to="/solarenergy">Energia Solar</Link></ColunmItens>
                                <ColunmItens><Link to="/eletricengineering">Engenharia Elétrica</Link></ColunmItens>
                                <ColunmItens><Link to="/eletronicsecurity">Segurança Eletrônica</Link></ColunmItens>
                            </Colunm>
                        </div>

                    </div>

                    <p className="text-center mt-4" id="copyright"></p>


                </FooterSection>
            </Footer>

        </>
    )
}