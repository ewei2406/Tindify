import './App.css';

import React, { useState } from 'react';

import Homepage from './pages/homepage/Homepage';

import { ThemeProvider } from 'styled-components';
import { Page } from './Page';
import { theme } from './themes/BaseTheme';

import { Pages } from './pages/Pages';

const App = () => {

    const [currentPage, setCurrentPage] = useState(Pages.HOME)

    const CurrentPage = 
        currentPage === Pages.HOME ? <Homepage setCurrentPage={() => {console.log("R")}}/> :
                <Homepage setCurrentPage={() => { console.log("R") }} /> 
 
    return(
        <ThemeProvider theme={theme}>
            <Page>
                {CurrentPage}
            </Page>
        </ThemeProvider>
    )
}

export default App
