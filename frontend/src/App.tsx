import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import styled from 'styled-components';

const theme = {
    // main: "red"
    borderWidth: 2,
    textColor: "#646464",
    lightColor: "#999",
    invertedColor: "#fff",

    buttonColor: "#fff",
    backgroundColor: "#fff",
    bodyFont: "'Nunito', sans-serif",
    titleFont: "'Montserrat', sans-serif",
    accent: "#EF466F",
    transition: "0.1s ease"
};

const Page = styled.div`
    background-color: ${p => p.theme.backgroundColor};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const App = () => {
    return(
        <ThemeProvider theme={theme}>
            <Page>
                <Homepage/>
            </Page>
        </ThemeProvider>
    )
}

export default App
