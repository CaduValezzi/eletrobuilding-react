import React from "react";
import Styled, { styled } from 'styled-components'
import { Link } from 'react-router-dom';
// img 
import Logo from "../assets/img/png-jpeg/logo/EB-dark.png"


const Header = Styled.header`
    box-shadow: 3px 3px 7px #0000002d;
    font-size: 1.2rem;
    font-weight: 600;
`
const Logoimg = Styled.img`
    height:5vh;
`
const ButtonWhats = Styled.button`
    background-color:#25D366; 
    &:hover  {
        
        background-color:#128C7E; 
    }
    &:active{
        border: none !important;
        background-color: #075E54 !important;
    }
    
   
`
const ButtonInsta = Styled.button`
    background:linear-gradient(130deg, #515bd4, #8134af, #dd2a7b, #feda77, #f58529);
    border: none; 
    &:hover  {
        
        background-color:#128C7E; 
    }
    &:active{
        border: none !important;
        background-color: #075E54 !important;
    }
    
`




function Menu() {
    window.addEventListener('scroll', () => {
        // if (window.screen.width > 768) {
            
        // }
        if (window.scrollY > 150) {
            document.querySelector(".menu").classList.add("bg-white", "p-3", "shadow")
        }
        else {
            document.querySelector(".menu").classList.remove("bg-white", "p-3", "shadow")
        }

    })


    return (
        <>
            <Header className="z-3 container-fluid position-fixed menu">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <Logoimg className="" src={Logo} alt="Eletro Building" />
                        </Link>
                        <button className="navbar-toggler" id="btn-menu" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="bi bi-list"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Início
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" to="/">Sobre Nós</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Serviços </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" to="/electricenergy">Engenharia Elétrica</Link>
                                        </li>
                                        <hr className="dropdown-divider" />
                                        <li>
                                            <Link className="dropdown-item" to="/solarenergy">Energia Solar</Link>
                                        </li>
                                        <hr className="dropdown-divider" />
                                        <li>
                                            <Link className="dropdown-item" to="/electronicsecurity">Segurança Eletrônica</Link>
                                        </li>
                                    </ul>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/talktous#maptalktous">Onde Estamos?</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/talktous#formtalktous">Fale conosco</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to="https://wa.me/+551149914110" target="_blank" className="nav-link">
                                        <ButtonWhats className="btn text-white"><i className="bi bi-whatsapp"></i> (11) 4991-4110
                                        </ButtonWhats>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="https://www.instagram.com/eletro.building" target="_blank" className="nav-link">
                                        <ButtonInsta className="btn text-white"><i class="bi bi-instagram "></i> Instagram
                                        </ButtonInsta>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Header>
        </>
    )
}

export default Menu