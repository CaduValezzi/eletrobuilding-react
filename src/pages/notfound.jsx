import React from "react";
import Image404 from "../assets/img/svg/404 Error Page not Found with people connecting a plug-rafiki.svg"
import Styled from "styled-components";

import { AnimatedMenu } from '../components/animated_menu'

const Img404 = Styled.img`
    height: 100% ;

`
export const NotFound = () => {
    return (
        <>
            <AnimatedMenu />

            <main className="container my-4 text-center">
                <h1 className=" pt-5">PÁGINA EM CONSTRUÇÃO</h1>
                <img src={Image404} alt="" />
            </main>

        </>
    )
}