import styled from 'styled-components';

import * as colors from '../../config/colors';
import { notoSans } from '../../config/fonts';

export const Container = styled.aside`
    width: 100%;
    display: flex;
    font-family: ${notoSans}, Arial, sans-serif;

    div {
        width: 100%;
        text-align: center;
    }

    h1 {
        margin: 25px 0px;
    }
`;

export const ContactsData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.color02};
    color: ${colors.color04};

    .contents {
        width: 300px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contents p {
        margin: 20px 0px;
    }
`;

export const TalkToMe = styled.div`
    background-color: ${colors.color03};

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form input,
    textarea {
        margin: 10px;
        padding: 5px;
        border: none;
        outline: none;
        border-bottom: 2px solid ${colors.color04};
        border-left: 2px solid ${colors.color04};
        background-color: transparent;

        ::placeholder {
            color: ${colors.color01};
            font-size: 12px;
        }
    }

    .form button {
        width: 70px;
        height: 30px;
        background-color: ${colors.color04};
        margin: 10px 0px;
        border-radius: 10px;
        cursor: pointer;
        border: none;

        :hover {
            border: 1px solid ${colors.color01};
        }
    }
`;
