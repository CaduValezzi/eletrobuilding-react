import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Colunm = styled.ul`
    list-style: none;
`
const ColunmItens = styled.li`
    line-height: 4rem;
    border-bottom: 2px solid #dfdcdc;
`

export const SectionMenuGeneric = () => {
    return (
        <>
            <section className="section-menu d-none d-sm-block mb-5">
                <h4>Páginas</h4>
                <Colunm className="list-group my-3">
                    <h5>Inicio</h5>
                    <ColunmItens className="mb-3">
                        <Link to="/">Sobre Nós</Link>
                    </ColunmItens>
                </Colunm>
                <h5>Serviços</h5>
                <Colunm className="list-group">
                    <ColunmItens className="">
                        <Link to="/eletricenergy">Entrevista Busines Hour</Link>
                    </ColunmItens>
                    <ColunmItens className="">
                        <Link to="#services">Serviços</Link>
                    </ColunmItens>
                </Colunm>


            </section>
        </>
    )
}