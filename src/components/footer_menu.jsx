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
                            
                        </div>

                        <div className="col mb-4">
                            <h5 className="mb-4">Redes Sociais</h5>
                            <Colunm className="list-group">
                                <ColunmItens><Link 
                                to="https://www.instagram.com/eletro.building" 
                                target="blank"><i class="bi bi-instagram "></i> Instagram</Link>
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
                                <ColunmItens><a href="mailto:contato@eletrobuilding.com.br"></a><i class="bi bi-envelope"></i> contato@eletrobuilding.com.br</ColunmItens>
                                <ColunmItens><a href="tel:1149914110"><i class="bi bi-telephone-fill"></i> (11) 4991-4110</a></ColunmItens>
                               
                            </Colunm>
                        </div>
                        <div className="col mb-4">
                            <h5 className="mb-4">Conheça Também</h5>
                            <Colunm className="list-group">
                                <ColunmItens><Link to="/solarenergy">Enérgia Solar</Link></ColunmItens>
                                <ColunmItens><Link to="/solarenergy">Engenharia Elétrica</Link></ColunmItens>
                                <ColunmItens><Link to="/solarenergy">Segurança Eletrônica</Link></ColunmItens>
                            </Colunm>
                        </div>

                    </div>

                    <p className="text-center mt-4">&copy; 2023 Eletro Building. Todos os direitos reservados.</p>


                </FooterSection>
            </Footer>

        </>
    )
}