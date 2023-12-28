import React from "react";
import styled from "styled-components";

const Colunm = styled.ul`
    list-style: none;
`
const ColunmItens = styled.li`
    line-height: 4rem;
    border-bottom: 2px solid #dfdcdc;
`

export const SectionMenuContact = () => {
    return (
        <>
            <section className="section-menu mb-5">
                <h4>Seções</h4>
                <Colunm className="list-group my-3">
                    <ColunmItens className="">
                        <a href="#formtalktous">Fale Conosco</a>
                    </ColunmItens>
                    <ColunmItens className="">
                        <a href="#maptalktous">Onde Estamos?</a>
                    </ColunmItens>
                </Colunm>
            </section>
        </>
    )
}