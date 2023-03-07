import styled from 'styled-components';

import * as colors from '../../config/colors';
import { notoSans } from '../../config/fonts';
import imgBackground from '../../images/img-fundo.png';

export const Container = styled.main`
    width: 100%;
    overflow: hidden;
    font-family: ${notoSans}, Arial, sans-serif;
    background: ${colors.color04} url(${imgBackground}) center top no-repeat fixed;
    background-size: cover;
`;

export const ContainerProfile = styled.div`
    width: 100%;
    position: relative;
    background-color: ${colors.color04};

    .containerProfile {
        width: 400%;
        display: flex;
    }

    .aboutMe,
    .formation,
    .experience {
        width: 25%;
    }

    div h1 {
        margin: 25px;
    }

    div ul {
        margin-right: 25px;
        list-style: none;
        text-align: center;
    }

    .lists {
        width: 100%;
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .aboutMe p {
        padding: 0px 50px;
        line-height: 1.5em;
    }

    svg {
        position: absolute;
        top: 50%;
        opacity: 0.5;
        transition: 0.4s;
        cursor: pointer;

        :hover {
            opacity: 1;
        }
    }

    .arrowLeft {
        left: 1.5%;
    }

    .arrowRight {
        right: 1.5%;
    }

    .nav {
        width: 100%;
        padding-bottom: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav div {
        width: 20px;
        height: 20px;
        margin: 0px 2px;
        border-radius: 50%;
        transition: 0.4s;
        border: 1px solid ${colors.color05};
        cursor: pointer;
    }

    .current {
        background-color: ${colors.color05};
    }
`;

export const ContainerKnowlegge = styled.div`
    width: 100%;
`;
