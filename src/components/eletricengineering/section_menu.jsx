import React from "react";
import styled from "styled-components";

const Colunm = styled.ul`
    list-style: none;
`
const ColunmItens = styled.li`
    line-height: 4rem;
    border-bottom: 2px solid #dfdcdc;
    

`

export const SectionMenuEE = () => {
    return (
        <>
            <section className="section-menu mb-5">
                <h4>Seções</h4>
                <Colunm className="list-group my-3">
                    <ColunmItens className="">
                        <a href="#main">Sobre</a>
                    </ColunmItens>
                    <ColunmItens className="">
                        <a href="#solucions">Soluções</a>
                    </ColunmItens>
                </Colunm>
            </section>
        </>
    )
}