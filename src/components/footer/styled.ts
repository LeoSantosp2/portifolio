import styled from 'styled-components';

import * as colors from '../../config/colors';
import * as fonts from '../../config/fonts';

export const Container = styled.footer`
    width: 100%;
    display: flex;
    font-family: ${fonts.roboto};
    background-color: ${colors.color04};

    div {
        width: 100%;
    }

    @media all and (max-width: 450px) {
        display: block;
    }
`;

export const SocialMedias = styled.div`
    padding-left: 50px;

    h3 {
        margin: 20px 0px;
        font-weight: bolder;
    }

    a {
        color: ${colors.color05};
    }

    .socialMedias {
        text-align: center;
    }

    .socialMedias ul {
        width: 100px;
        height: 150px;
        list-style: none;
        columns: 2;
    }

    @media all and (max-width: 450px) {
        padding-left: 25px;

        h3 {
            margin: 0px;
            padding-top: 20px;
            padding-bottom: 7px;
            font-size: 16px;
        }

        svg {
            width: 25px;
            height: 25px;
        }
    }
`;

export const Curriculo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        margin-bottom: 7px;
        color: ${colors.color05};

        :hover {
            text-decoration: none;
        }
    }

    p {
        font-style: italic;
        font-size: 13px;
    }

    @media all and (max-width: 450px) {
        a,
        p {
            font-size: 12px;
        }
    }
`;
