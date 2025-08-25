import React from "react";

import { SectionMenuEE } from "../components/eletricengineering/section_menu";

import EletricEngineer from "../assets/img/pages/eletricengineering/high-voltage-transformer-and-fire-control-system-at-power-plant.jpg"

export const EletricEngineering = () => {
    return (
        <div className="container">
            <div className="row row-cols-2 pt-5">
                <div className="col-12 col-md-3 my-5 left-menu pe-md-5">
                    <SectionMenuEE/>
                </div>
                <div className="col-12 col-md-9 ps-md-5">
                    
                    <main className="container my-4 bg-white" id="main">
                        <section className="row p-5 d-flex align-items-center">
                            <div className="col-12 col-md-6">
                                <h1 className="display-8 ">
                                    Engenharia Elétrica
                                </h1>
                                <h2 className="my-4">
                                    <a className="text-gold " href="#solucions">O que oferecemos a você?</a>
                                </h2>
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="img-fluid mt-4"
                                    src={EletricEngineer}
                                    alt="projetos eletricos e ferramentas" />
                            </div>
                        </section>
                    </main>


                    <section className="container bg-grey rounded-1" id="solucions">
                        <div className="col-12 text-center">
                            <ul className="list-group list-group-flush ">
                                <h2 className="w-75 mx-auto mb-3 mt-4">
                                    Nossas Soluções
                                </h2>
                                <li className="list-group-item bg-grey ">
                                    Consultoria e Serviços em Sistemas Elétricos AT / MT / BT
                                </li>
                                <li className="list-group-item bg-grey ">
                                    Estudos de Viabilidade e Eficiência Energética
                                </li>
                                <li className="list-group-item bg-grey ">
                                    Atendimento e Adequação a NR-10
                                </li>
                                <li className="list-group-item bg-grey ">
                                    Projetos e Laudos Elétricos
                                </li>
                                <li className="list-group-item bg-grey mb-3">
                                    Instalação e Manutenção Elétrica
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}