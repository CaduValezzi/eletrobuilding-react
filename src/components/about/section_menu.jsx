import React from "react";
import styled from "styled-components";

const Colunm = styled.ul`
    list-style: none;
`
const ColunmItens = styled.li`
    line-height: 4rem;
    border-bottom: 2px solid #dfdcdc;
    

`

export const SectionMenuAbout = () => {
    return (
        <>
            <section className="section-menu mb-5">
                <h4>Seções</h4>
                <Colunm className="list-group my-3">
                    <ColunmItens className="">
                        <a href="#about">Sobre Nós</a>
                    </ColunmItens>
                    <ColunmItens className="">
                        <a href="#director">Sobre o Diretor</a>
                    </ColunmItens>
                    {/* <ColunmItens className="">
                        <a href="#services">Parceiros e Clientes</a>
                    </ColunmItens> */}
                </Colunm>
            </section>
        </>
    )
}