import React from 'react';
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineCopyright,
} from 'react-icons/ai';

import { Container, SocialMedias, Curriculo } from './styled';

export default function Footer() {
    return (
        <Container>
            <SocialMedias>
                <h3>Redes Sociais</h3>
                <div className="socialMedias">
                    <ul>
                        <li>
                            <a
                                href="https://www.facebook.com/profile.php?id=100003188831956"
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                <AiOutlineFacebook size={32} />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/leosaantosp/" target={'_blank'} rel="noreferrer">
                                <AiOutlineInstagram size={32} />
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/LeoSantosp2" target={'_blank'} rel="noreferrer">
                                <AiOutlineGithub size={32} />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/leonardo-santos-9b9719238/"
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                <AiOutlineLinkedin size={32} />
                            </a>
                        </li>
                    </ul>
                </div>
            </SocialMedias>
            <Curriculo>
                <a
                    href="https://leosantosp2.github.io/curriculo/curriculo/Curr%C3%ADculo.pdf"
                    target={'_blank'}
                    rel="noreferrer"
                >
                    Faça Download do Meu Currículo
                </a>
                <p>
                    <AiOutlineCopyright />
                    2021 por Leonardo Santos
                </p>
            </Curriculo>
        </Container>
    );
}
