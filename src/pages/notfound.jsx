import React from "react";
import Image404 from "../assets/img/svg/404 Error Page not Found with people connecting a plug-rafiki.svg"
import Styled from "styled-components";

import { AnimatedMenu } from '../components/animated_menu'

const Img404 = Styled.img`
    max-height: 100vh ;
`
export const NotFound = () => {
    return (
        <>
            <AnimatedMenu />

            <main className="container my-4 text-center">
                <Img404 className="col-12 img-fluid" src={Image404} alt="" />
            </main>

        </>
    )
}