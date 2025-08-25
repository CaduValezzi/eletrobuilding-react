import React from "react";
import styled from "styled-components";

const Video = styled.iframe`
    width: 100%; 
    aspect-ratio: 16/9;
`

export const Blog = () => {
    return (
        <>
            <main className="container mt-5 d-flex justify-content-center">
                <section className="py-5 col-8 ">
                    <h1 className="mb-4">
                        Transformando energia solar em sucesso financeiro
                    </h1>
                    <div className="d-flex justify-content-center mb-4">
                        <Video title="Bussines Hour" src="https://www.youtube.com/embed/CDCIa-uGbrM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="allowFullScreen">
                        </Video>
                    </div>
                    <h2 className="mb-4">
                        Introdução
                    </h2>
                    <p className="mb-4">

                        No programa de negócios Networking Estratégico da TV Mais, sempre trazemos convidados de sucesso no mercado para compartilhar suas trajetórias e ideias inovadoras.
                        Hoje, estamos muito felizes em receber o Engenheiro Alex Valezzi, especialista em energia solar e fundador da empresa Eletro Building.&nbsp;
                        Durante esta entrevista, discutiremos como podemos aproveitar ao máximo a energia solar para obter benefícios financeiros.

                    </p>
                    <h2 className="mb-4" >
                        A trajetória de sucesso do Engenheiro Alex Valezzi

                    </h2>
                    <p className="mb-4">

                        Alex Valezzi iniciou sua carreira no ramo plástico, e fez um curso de eletricista de manutenção no SENAI.
                        Após trabalhar em uma empresa multinacional por 35 anos, ocupando os cargos de Supervisor e Engenheiro de Manutenção Especialista, Alex decidiu se aposentar e abrir sua própria empresa, a Eletro Building.

                    </p>
                    <p className="mb-4">

                        Sua empresa se especializou em energia solar, oferecendo serviços de engenharia elétrica e se tornando uma referência no mercado.
                        Além disso, Alex é autorizado pela Intelbras, uma empresa renomada, e tem parcerias com diversas outras empresas do setor.
                        Com mais de 25 anos de garantia, o retorno do investimento em energia solar geralmente ocorre em apenas 5 anos.

                    </p>
                    <h2 className="mb-4">

                        Empreendedorismo e Intraempreendedorismo

                    </h2>
                    <p className="mb-4">

                        A história de Alex mostra a importância de ser um intraempreendedor, ou seja, alguém que busca constantemente se desenvolver e trazer inovação para o ambiente de trabalho.
                        Ele destaca a importância de aprender com pessoas mais experientes e aproveitar suas experiências e sabedoria.
                        Alex enfatiza que a persistência, resiliência e aprendizado constante são essenciais para o sucesso como empreendedor.

                    </p>
                    <h2 className="mb-4">


                        A importância da educação e treinamento</h2>
                    <p className="mb-4">

                        Alex ressalta que a educação é fundamental para o sucesso de um empreendedor.
                        Ele recomenda aproveitar os cursos gratuitos oferecidos pelo Sebrae, que abordam diversos aspectos do empreendedorismo.
                        Além disso, Alex destaca a importância de cursos especializados para conhecimentos avançados específicos, como o de precificação de produtos.</p>
                    <h2 className="mb-4">

                        Energia solar: uma oportunidade de negócio</h2>
                    <p className="mb-4">

                        A energia solar tem se tornado cada vez mais popular e é uma excelente oportunidade de negócio.
                        Alex destaca que ainda há muito mercado para ser explorado, principalmente no Brasil.
                        Com o avanço das tecnologias e a conscientização sobre a importância da energia limpa, o cliente está mais interessado em investir em energia solar.</p>
                    <p className="mb-4">

                        Um ponto importante a ser destacado é que a energia solar não é mais um luxo para quem tem muito dinheiro.
                        Atualmente, é possível financiar a instalação dos painéis solares e o retorno do investimento ocorre em aproximadamente 5 anos.
                        As empresas também podem se beneficiar da energia solar, reduzindo os custos com energia elétrica.</p>
                    <h2 className="mb-4">

                        Segurança e qualidade</h2>
                    <p className="mb-4">

                        Alex enfatiza a importância da segurança e qualidade na instalação de sistemas de energia solar.
                        Ele possui parceria com a Intelbras, uma empresa com mais de 45 anos de experiência no mercado nacional.
                        Além disso, a Eletro Building garante o funcionamento dos sistemas de energia solar por 25 anos e oferece manutenção especializada.</p>
                    <h2 className="mb-4">

                        Conclusão</h2>
                    <p className="mb-4">

                        O Engenheiro Alex Valezzi é um exemplo de empreendedor que exerceu a oportunidade de negócio na energia solar e construiu uma empresa de sucesso.&nbsp;
                        Sua trajetória mostra a importância do aprendizado contínuo, do intraempreendedorismo e do investimento em energia limpa.
                        A Eletro Building está de portas abertas para quem quiser saber mais sobre energia solar e como ela pode trazer benefícios financeiros.&nbsp;
                        Entre em contato com a Eletro Building para solicitar um orçamento sem compromisso e descubra como você pode transformar a energia solar em sucesso financeiro!</p>
                </section>
            </main>
        </>

    )
}