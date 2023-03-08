import React from 'react';

import GlobalStyled from './styles/GlobalStyled';
import Header from './components/header';
import Main from './components/main';
import Aside from './components/aside';
import Footer from './components/footer';

function App() {
    return (
        <>
            <GlobalStyled />
            <Header />
            <Main />
            <Aside />
            <Footer />
        </>
    );
}

export default App;
