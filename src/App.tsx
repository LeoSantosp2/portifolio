import React from 'react';

import GlobalStyled from './styles/GlobalStyled';
import Header from './components/header';
import Main from './components/main';

function App() {
    return (
        <>
            <GlobalStyled />
            <Header />
            <Main />
        </>
    );
}

export default App;
