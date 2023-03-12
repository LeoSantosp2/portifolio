import styled from 'styled-components';

import * as colors from '../../config/colors';
import { notoSans } from '../../config/fonts';
import imgBackground from '../../images/img-fundo.png';

export const Container = styled.main`
    width: 100%;
    font-family: ${notoSans}, Arial, sans-serif;
    background: ${colors.color04} url(${imgBackground}) center top no-repeat fixed;
    background-size: cover;

    .containerProfile {
        position: relative;
        background-color: ${colors.color04};
    }

    .slider {
        height: 250px;
    }

    .title,
    .contents {
        width: 100%;
    }

    .title {
        height: 100px;
        padding-left: 20px;
        padding-top: 20px;
    }

    .contents {
        height: 100px;
        padding: 0px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contents p {
        text-align: justify;
    }

    .contents ul {
        margin: 0px 20px;
        list-style: none;
        text-align: center;
    }

    .projects .contents ul {
        columns: 2;
        list-style: disc;
        text-align: left;
    }

    .projects .contents ul li {
        width: 200px;
        margin: 10px 0px;
    }

    .projects .contents ul li a {
        text-decoration: none;
        color: ${colors.color05};

        :hover {
            text-decoration: underline;
        }
    }

    .button {
        position: absolute;
        top: 50%;
        border: 0px;
        cursor: pointer;
        background-color: transparent;
    }

    .arrowLeft {
        left: 1.5%;
    }

    .arrowRight {
        right: 1.5%;
    }

    @media all and (max-width: 450px) {
        .slider {
            height: 350px;
        }

        .title {
            padding-left: 10px;
            padding-top: 10px;
            font-size: 14px;
        }

        .contents {
            padding-top: 70px;
            font-size: 12px;
        }

        .projects .contents ul {
            columns: 1;
            margin-left: 100px;
        }
    }
`;

export const ContainerKnowlegge = styled.div`
    width: 100%;

    h1 {
        margin: 25px;
    }

    .contents-ability {
        display: flex;
        justify-content: center;
        align-items: center;
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

    @media all and (max-width: 450px) {
        h1 {
            margin: 10px;
            font-size: 20px;
        }

        table {
            width: 100%;
            height: 130px;
            margin-top: 30px;
            font-size: 11.5px;
        }

        table tr td {
            width: 50px;
            padding: 5px;
            background-color: ${colors.color02};
            color: ${colors.color04};
        }
    }
`;
