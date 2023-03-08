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

    .containerProfile {
        position: relative;
        background-color: ${colors.color04};
    }

    .containerProfile h1 {
        margin: 25px;
    }

    .containerProfile ul {
        margin-right: 25px;
        list-style: none;
        text-align: center;
    }

    .contents {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .aboutMe p {
        padding: 0px 50px;
        line-height: 1.5em;
    }

    .projects ul {
        width: 500px;
        margin: auto;
        columns: 2;
        list-style: disc;
        text-align: left;
    }

    .projects ul li {
        width: 200px;
        margin: 10px 0px;
    }

    .projects ul li a {
        text-decoration: none;
        color: ${colors.color05};

        :hover {
            text-decoration: underline;
        }
    }

    .button {
        position: absolute;
        top: 50%;
        opacity: 0.5;
        transition: 0.4s;
        border: 0px;
        cursor: pointer;
        background-color: transparent;

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
`;

export const ContainerKnowlegge = styled.div`
    width: 100%;

    h1 {
        margin: 25px;
    }

    table {
        width: 600px;
        height: 350px;
        margin-bottom: 70px;
        border-collapse: collapse;
    }

    table tr td {
        width: 100px;
        padding: 10px;
        text-align: center;
        background-color: ${colors.color02};
        color: ${colors.color04};
    }

    .td-01 {
        border-top-left-radius: 5px;
    }

    .td-03 {
        border-top-right-radius: 5px;
    }

    .td-04 {
        border-bottom-left-radius: 5px;
    }

    .td-07 {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`;
