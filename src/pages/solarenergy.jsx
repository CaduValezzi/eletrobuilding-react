import React from "react";
import styled from "styled-components";


import MainImg from "../assets/img/pages/solarenergy/29.jpg"
import SolarPanel from "../assets/img/pages/solarenergy/pexels-tom-fisk-9893729.jpg"

import { SectionMenuSolar } from "../components/solarenergy/section_menu"

const Video = styled.iframe`
    width: 90%;
    height: 50vh;
    border-radius: 5px;
    
`

export const SolarEnergy = () => {
    return (
        <div className="container">
            <div className="row row-cols-2 pt-5">
                <div className="col-12 col-md-3 my-5 left-menu pe-md-5">
                    <SectionMenuSolar />
                </div>
                <div className="col-12 col-md-9 ps-md-5">
                    {/* conteudo aqui */}

                    <main className="container my-4 bg-white" id="main">
                        <section className="row p-5 d-flex align-items-center">
                            <div className="col-12 col-md-6">
                                <h1 className="mb-4">Soluções On Grid</h1>
                                <p className="mb-4">
                                    Ao investir em um sistema conectado à rede da concessionária, <strong className="text-gold">reduz até 95% da sua conta de luz</strong>,
                                    garantindo o retorno do seu investimento e contribuibuindo para um mundo mais sustentável.
                                </p>
                                <a href="#intelbrasvid" className="btn btn-outline-warning"><i className="bi bi-info-circle"></i> Mais
                                    informações </a>
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="img-fluid mt-4" src={MainImg} alt="" />
                            </div>
                        </section>
                    </main>

                    <section className="container p-5 bg-grey rounded-1" id="offgrid">
                        <div className="row d-flex align-items-center justify-content-around">
                            <div className="col-12 col-md-6 ">
                                <img className="img-fluid mb-4"
                                    src={SolarPanel} alt="" />
                            </div>
                            <div className="col-12 col-md-6">
                                <h2 className="display-8 ">Soluções Off Grid.</h2>
                                <p className="mt-4 ">
                                    "Liberte-se da rede elétrica com sistemas off-grid de energia solar: <strong
                                        className="text-gold">independência energética, sustentabilidade e economia</strong>, tudo em um
                                    pacote poderoso de energia limpa!"
                                </p>
                                <p className="mb-4 text-li-grey">
                                    por Chat GPT
                                </p>
                                <a href="#intelbrasvid" className="btn btn-outline-warning"><i className="bi bi-info-circle"></i> Mais
                                    informações </a>
                            </div>
                        </div>
                    </section>


                    <section className="container my-4 bg-black text-light text-center rounded-1" id="intelbrasvid">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <h3 className=" mt-4 mx-auto">
                                    Intelbras Solar
                                </h3>
                            </div>
                            <div className="col-12">
                                <h4 className=" mt-4 mx-auto">
                                    On Grid
                                </h4>
                                <Video className="iframe-style my-4"
                                    src="https://www.youtube.com/embed/WP8Fxj1SNDQ?si=Dh9JzsPkkSIlKyW0&amp;controls=0&amp;start=9"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></Video>
                            </div>
                            <div className="col-12">
                                <h4 className=" mt-4 mx-auto">
                                    Off Grid
                                </h4>
                                <Video className="iframe-style my-4"
                                    src="https://www.youtube.com/embed/TQnsCfIvfbw?si=VH5m0HsWMEsxak1W&amp;controls=0"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></Video>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}