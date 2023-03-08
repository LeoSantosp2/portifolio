import React from 'react';

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
                    <a href="#">Página inicial</a>
                    <a href="#about-me">Sobre Mim</a>
                    <a href="#talkToMe">Fale Comigo</a>
                </nav>
            </div>
        </Container>
    );
}
