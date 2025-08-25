import React from "react";

import { SectionMenuES } from "../components/eletronicsecurity/section_menu";

import MainImage from "../assets/img/png-jpeg/3772.jpg"
import FacialRecognition from "../assets/img/pages/eletronicsecurity/reconhecimento-facial-bloco.jpg"
import CamBanners from "../assets/img/pages/eletronicsecurity/card-mini-banner-cameras-hdcvi.jpg"
import Intercom from "../assets/img/pages/eletronicsecurity/intelbras_interfonia_sub-empresarial_590x360_1.jpg"
import Alarms from "../assets/img/pages/eletronicsecurity/intelbras_alarmes_sub-central_590x360_0.jpg"
import Locks from "../assets/img/pages/eletronicsecurity/intelbras_seguranca_segmento_sub-fechaduras_590x360_0.jpg"
import Dvr from "../assets/img/pages/eletronicsecurity/card-mini-banner-dvr-gravador-digital-de-video.bak.png"

export const EletronicSecurity = () => {
    return (
        <div className="container">
            <div className="row row-cols-2 pt-5">
                <div className="col-12 col-md-3 my-5 left-menu pe-md-5">
                    <SectionMenuES />
                </div>
                <div className="col-12 col-md-9 ps-md-5">
                    {/* conteudo aqui */}
                    <main className="container my-4 bg-white" id="main">
                        <section className="row p-5 d-flex align-items-center">
                            <div className="col-12 col-md-6">
                                <h1 className="display-8">Segurança Eletrônica</h1>
                                <p className="my-4 w-75">
                                    <strong className="text-gold">Uma salvaguarda fundamental para lares e empresas.</strong> Sistemas de
                                    alarme, vigilância por câmeras e controle de acesso oferecem serenidade e proteção contra intrusos.
                                </p>
                                <a href="#cards-eletrnicsec" className="btn btn-outline-warning btn-end"><i className="bi bi-info-circle"></i>
                                    Mais
                                    informações </a>
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="img-fluid mt-4" src={MainImage} alt="" />
                            </div>
                        </section>
                    </main>

                    <section className="container p-5" id="cards-eletrnicsec">
                        <div className="row row-cols-1 row-cols-md-2  row-cols-xxl-3 g-4">
                            <div className="">
                                <div className="card h-100 ">
                                    <img src={FacialRecognition} className="card-img-top" alt="mulher na frente de um reconhecedor facial" />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">Controle de Acesso</h5>
                                        <p className="card-text">O controle de acesso é crucial para garantir segurança e restrição de
                                            áreas. Tecnologias como cartões e biometria protegem ambientes sensíveis.</p>
                                        <a href="/contact" className="btn btn-warning btn-end"><i
                                            className="bi bi-info-circle"></i>
                                            Mais
                                            informações </a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card h-100 ">
                                    <img src={CamBanners} className="card-img-top"
                                        alt="câmera fazendo a vigilancia" />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">Sistemas CFTV</h5>
                                        <p className="card-text">As câmeras oferecem eficiência inigualável na vigilância. Com alta
                                            resolução e conectividade, proporcionam monitoramento preciso e segurança abrangente em
                                            tempo real.</p>
                                        <a href="/contact" className="btn btn-warning btn-end"><i
                                            className="bi bi-info-circle"></i>
                                            Mais
                                            informações </a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card h-100 ">
                                    <img src={Intercom}
                                        className="card-img-top" alt="..." />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">Interfonia</h5>
                                        <p className="card-text">A interfonia proporciona comunicação eficiente e segura em residências e
                                            empresas. Agiliza o contato e o controle de acesso, aumentando a conveniência e a segurança.
                                        </p>
                                        <a href="/contact" className="btn btn-warning btn-end"><i
                                            className="bi bi-info-circle"></i>
                                            Mais
                                            informações </a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card h-100 ">
                                    <img src={Alarms} className="card-img-top"
                                        alt="..." />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">Sistemas de Alarmes</h5>
                                        <p className="card-text">Os alarmes garantem eficiência na proteção de propriedades. Detectam
                                            intrusões e perigos, oferecendo alertas rápidos para manter a segurança em níveis
                                            superiores.</p>
                                        <a href="/contact" className="btn btn-warning btn-end"><i
                                            className="bi bi-info-circle"></i>
                                            Mais
                                            informações </a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card h-100 ">
                                    <img src={Locks}
                                        className="card-img-top" alt="..." />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">Fechaduras Digitais</h5>
                                        <p className="card-text">Com fechaduras digitais, abra portas com senha, digital ou chaveiros de
                                            proximidade, garantindo segurança e liberdade, deixando para trás chaves frágeis.</p>
                                        <a href="/contact" className="btn btn-warning btn-end"><i
                                            className="bi bi-info-circle"></i>
                                            Mais
                                            informações </a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card h-100 ">
                                    <img src={Dvr}
                                        className="card-img-top" alt="..." />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">Gravadores Digitais de Vídeo</h5>
                                        <p className="card-text">Gravadores digitais são altamente eficientes na captura e armazenamento de
                                            informações. Permitem monitoramento contínuo e recuperação de dados com facilidade e
                                            precisão.</p>
                                        <a href="/contact" className="btn btn-warning"><i className="bi bi-info-circle"></i>
                                            Mais
                                            informações </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}