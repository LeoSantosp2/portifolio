import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Container, ContainerKnowlegge } from './styled';

export default function Main() {
    return (
        <Container>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={20}
                totalSlides={4}
                className="containerProfile"
            >
                <Slider className="slider">
                    <Slide index={0} className="aboutMe" id="about-me">
                        <div className="title">
                            <h1>Sobre Mim</h1>
                        </div>

                        <div className="contents">
                            <p>
                                Olá, tudo bem? Me chamo <strong>Leonardo</strong> e tenho <strong>22 anos</strong>!
                                Atualmente, trabalho como <strong>NOC (Network Operation Center)</strong> na empresa{' '}
                                <strong>Dot a Dot Telecomunicações</strong>. Gosto de adquirir conhecimentos teóricos e
                                práticos quando o assunto é programação. Busco oportunidades para poder desenvolver e
                                melhorar meus conhecimentos, visando sempre o crescimento entre mim e a empresa.
                            </p>
                        </div>
                    </Slide>

                    <Slide index={1} className="formation">
                        <div className="title">
                            <h1>Formação</h1>
                        </div>

                        <div className="contents">
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
                    </Slide>

                    <Slide index={2} className="experience">
                        <div className="title">
                            <h1>Experiências</h1>
                        </div>

                        <div className="contents">
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
                    </Slide>

                    <Slide index={3} className="projects">
                        <div className="title">
                            <h1>Projetos</h1>
                        </div>

                        <div className="contents">
                            <ul>
                                <li>
                                    <a
                                        href="https://leosantosp2.github.io/curiosidade-tecnologia"
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        Curiosidade Tecnologia
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://leosantosp2.github.io/projeto-enel"
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        Projeto Enel
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://leosantosp2.github.io/projeto-cordel"
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        Projeto Cordel
                                    </a>
                                </li>

                                <li>
                                    <a href="https://leosantosp2.github.io/nft" target={'_blank'} rel="noreferrer">
                                        NFT
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://leosantosp2.github.io/calculadora"
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        Calculadora
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://leosantosp2.github.io/formulario"
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        Formulário
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://leosantosp2.github.io/Lista-de-tarefas"
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        Lista de Tarefas
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://leosantosp2.github.io/Lista-de-tarefas-2.0"
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        Lista de Tarefas 2.0
                                    </a>
                                </li>

                                <li>
                                    <a href="https://leosantosp2.github.io/pomodoro" target={'_blank'} rel="noreferrer">
                                        Pomodoro
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Slide>
                </Slider>

                <ButtonBack className="arrowLeft button">
                    <AiOutlineArrowLeft size={28} />
                </ButtonBack>
                <ButtonNext className="arrowRight button">
                    <AiOutlineArrowRight size={28} />
                </ButtonNext>
            </CarouselProvider>

            <ContainerKnowlegge>
                <h1>Conhecimentos</h1>

                <div className="contents-ability">
                    <table>
                        <tr>
                            <td className="td-01">
                                HTML5/CSS3 <br /> Básico
                            </td>
                            <td>
                                JavaScript <br /> Intermediário
                            </td>
                            <td className="td-03">
                                TypeScript <br /> Básico
                            </td>
                        </tr>
                        <tr>
                            <td className="td-04">
                                Python 3 <br /> Básico
                            </td>
                            <td>
                                Português <br /> Nativo
                            </td>
                            <td>
                                Inglês <br /> Básico
                            </td>
                            <td className="td-07">
                                Pacote Office <br /> Básico
                            </td>
                        </tr>
                    </table>
                </div>
            </ContainerKnowlegge>
        </Container>
    );
}
