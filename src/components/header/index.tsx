import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from './styled';

import imgPerfil from '../../images/img-perfil.jpg';

export default function Header() {
    return (
        <Container>
            <div className="perfil">
                <h1>Leonardo Santos de Paulo</h1>
                <p>Desenvolvedor Web</p>
                <img src={imgPerfil} alt="Foto de Perfíl" />
            </div>

            <div className="menu">
                <nav>
                    <AnchorLink href="#">Página inicial</AnchorLink>
                    <AnchorLink href="#about-me">Sobre Mim</AnchorLink>
                    <AnchorLink href="#talkToMe">Fale Comigo</AnchorLink>
                </nav>
            </div>
        </Container>
    );
}
