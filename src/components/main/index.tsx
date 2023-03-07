import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { Container, ContainerProfile, ContainerKnowlegge } from './styled';

export default function Main() {
    const slides = useRef<HTMLDivElement>(null);
    const nav = useRef<HTMLDivElement>(null);

    const createDiv = () => {
        if (null !== slides.current) {
            for (let i = 0; i < slides.current?.childElementCount; i++) {
                const div = document.createElement('div');

                div.id = String(i);

                nav.current?.appendChild(div);
            }

            document.getElementById('0')?.classList.add('current');
        }
    };

    setTimeout(() => {
        if (nav.current?.childElementCount === slides.current?.childElementCount) return;
        createDiv();
    }, 1);
    return (
        <Container>
            <ContainerProfile>
                <div ref={slides} className="containerProfile">
                    <div className="aboutMe slide" id="about-me">
                        <h1>Sobre Mim</h1>

                        <div className="lists">
                            <p>
                                Olá, tudo bem? Me chamo <strong>Leonardo</strong> e tenho <strong>22 anos</strong>!
                                Atualmente, trabalho como <strong>NOC (Network Operation Center)</strong> na empresa{' '}
                                <strong>Dot a Dot Telecomunicações</strong>. Gosto de adquirir conhecimentos teóricos e
                                práticos quando o assunto é programação. Busco oportunidades para poder desenvolver e
                                melhorar meus conhecimentos, visando sempre o crescimento entre mim e a empresa.
                            </p>
                        </div>
                    </div>

                    <div className="formation slide">
                        <h1>Formação</h1>

                        <div className="lists">
                            <ul>
                                <h3>Análise e Desenvolvimento de Sistemas</h3>
                                <li>Faculdade das Américas - Graduação</li>
                                <li>Fevereiro 2019 - Julho 2021</li>
                            </ul>

                            <ul>
                                <h3>Inglês</h3>
                                <li>Enjoy - Curso (Incompleto)</li>
                                <li>Fevereiro 2019 - Abril 2020</li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience slide">
                        <h1>Experiências</h1>

                        <div className="lists">
                            <ul>
                                <h3>Analista de Suporte</h3>
                                <li>Eoncoop - Autônomo</li>
                                <li>Janeiro 2021 - Novembro 2022</li>
                            </ul>

                            <ul>
                                <h3>Noc (Network Operation Center)</h3>
                                <li>Dot a Dot Telecomunicações - Contrato</li>
                                <li>Desde Novembro 2022</li>
                            </ul>
                        </div>
                    </div>

                    <div className="projects slide">
                        <h1>Projetos</h1>
                    </div>
                </div>

                <AiOutlineArrowLeft className="arrowLeft" size={24} />
                <AiOutlineArrowRight className="arrowRight" size={24} />

                <div ref={nav} className="nav"></div>
            </ContainerProfile>

            <ContainerKnowlegge>
                <h1>Conhecimentos</h1>

                <table></table>
            </ContainerKnowlegge>
        </Container>
    );
}
