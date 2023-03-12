import styled from 'styled-components';

import * as colors from '../../config/colors';
import * as fonts from '../../config/fonts';

export const Container = styled.header`
    width: 100%;
    display: flex;
    font-family: ${fonts.notoSans}, Arial, sans-serif;
    background-color: ${colors.color01};

    div {
        width: 100%;
    }

    .perfil {
        padding: 30px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .perfil h1 {
        color: ${colors.color04};
    }

    .perfil p {
        margin: 5px 0px;
        color: ${colors.color02};
    }

    .perfil img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu nav a {
        margin: 0px 5px;
        text-decoration: none;
        color: ${colors.color04};

        :hover {
            text-decoration: underline;
        }
    }

    @media all and (max-width: 770px) {
        display: block;

        .perfil h1 {
            font-size: 30px;
        }
    }

    @media all and (max-width: 400px) {
        .perfil h1 {
            font-size: 23px;
        }

        .menu nav {
            margin-bottom: 10px;
            font-size: 14px;
        }
    }
`;
