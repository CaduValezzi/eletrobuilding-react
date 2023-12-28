import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"


import { SectionMenuAbout } from "../components/about/section_menu";
// import { SectionMenuGeneric } from "../components/generic/section_menu";

import Carousel1 from "../assets/img/png-jpeg/4334.jpg"
import Carousel2 from "../assets/img/png-jpeg/electricity.jpg"
import Carousel3 from "../assets/img/png-jpeg/70.jpg"


const InterviewVideo = styled.iframe`
    width: 100%;
    height: 50vh;
    border: 5px solid #ffd700;
    border-radius: 10px;
    
`
const CarouselImg = styled.img`
    max-height: 100vh;
`
const AboutContent = styled.section`
    
`

export const About = () => {

    return (
        <>
            <main className="container-fluid p-0 m-0 z-n1" id="main">
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                        </button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">
                        </button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
                        </button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <CarouselImg src={Carousel1} className="d-block w-100" alt="..." />
                            <div className="position-absolute top-50 carousel-caption d-none d-md-block">
                                <h1 className="text-black">Enérgia Solar</h1>
                                <Link className="fw-bold" to="/solarenergy">Clique aqui</Link>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <CarouselImg src={Carousel2} className="d-block w-100" alt="..." />
                            <div className="position-absolute top-50 carousel-caption d-none d-md-block">
                                <h1 className="text-black">Engenharia Elétrica</h1>
                                <Link className="fw-bold" to="/eletricengineering">Clique aqui</Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <CarouselImg src={Carousel3} className="d-block w-100" alt="..." />
                            <div className="position-absolute top-50 carousel-caption d-none d-md-block">
                                <h1 className="text-black">Segurança Eletrônica</h1>
                                <Link className="fw-bold" to="/eletricsecurity">Clique aqui</Link>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </main>

            <AboutContent className="container">
                <div className="row row-cols-2 pt-5">
                    <div className="col-12 col-md-3 my-5 left-menu pe-md-5">
                        <SectionMenuAbout />
                        {/* <SectionMenuGeneric/> */}
                    </div>


                    <div className="col-12 col-md-9 ps-md-5">
                        <section className="section-content">
                            <div className="row row-cols-2">
                                <div className="col-12 pt-5" id="about">
                                    <h2 className="text-center mx-auto mb-5">
                                        Sobre Nós
                                    </h2>
                                    <p className="mb-4">
                                        A <strong className="text-gold">ELETRO BUILDING</strong> atua nos setores Industrial, Comercial e
                                        Residencial,
                                        oferecendo soluções técnicas para manutenção e otimização de processos, seguindo
                                        rigorosamente normas vigentes.
                                    </p>
                                    <p className="mb-4">
                                        Com uma equipe especializada, a empresa busca a excelência, identificando melhorias em processos
                                        produtivos e administrativos, garantindo a satisfação dos clientes.
                                    </p>
                                </div>

                                <div className="col-12 pt-5" id="bussineshour">
                                    <h2 className=" text-center mx-auto my-4">
                                        Entrevista BUSINESS HOUR
                                    </h2>
                                    <InterviewVideo className="my-4 img-fluid" src="https://www.youtube.com/embed/CDCIa-uGbrM?si=Q6dS7qknEJzY6zbl" title="Entrevista no BUSINESS HOUR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></InterviewVideo>
                                </div>
                            </div>
                        </section>


                        {/* <section className="container bg-grey rounded-1" id="services">
                            <div className="row row-cols-2 justify-content-evenly ">
                                <div className="col-12">
                                    <h2 className="display-8 w-75 text-center mx-auto my-4">
                                        Nossos Serviços
                                    </h2>
                                </div>
                                <div className="col-12 col-md-5 Electric-engineering row align-items-center text-center mb-3">
                                    <h3>
                                        <a className="text-gold" href="./electricenergy.html">Engenharia Elétrica</a>
                                    </h3>
                                </div>
                                <div className="col-12 col-md-5 Solar-energy row align-items-center text-center mb-4">
                                    <h3>
                                        <a className="text-gold" href="./solarenergy.html">Energia Solar</a>
                                    </h3>
                                </div>
                                <div className="col-12 col-md-5 Electronic-security row align-items-center text-center mb-4">
                                    <h3>
                                        <a className="text-gold" href="./electronicsecurity.html">Segurança Eletrônica</a>
                                    </h3>
                                </div>
                            </div>
                        </section> */}

                        <section className="container bg-grey rounded-1">

                        </section>
                    </div>
                </div>
            </AboutContent>

        </>
    );
}

