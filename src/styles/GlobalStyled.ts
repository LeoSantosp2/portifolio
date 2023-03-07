import { createGlobalStyle } from 'styled-components';

import * as fonts from '../config/fonts';

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html, body, #root{
        width: 100%;
        height: 100vh;
    }

    body h1{
        font-family: ${fonts.roboto}, Arial, sans-serif;
    }
`;
