import './App.css';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeSwitcher from './components/ThemeSwitcher';
import Homepage from './pages/homepage/Homepage';
import PlaylistPage from './pages/playlist/PlaylistPage';

import Themes from './themes/Themes';
import { Page } from './Page';
import { Content } from './Content';
import { PageNames } from './pages/PagesNames';
import { ThemeNames } from './themes/ThemeNames';
import SeedPage from './pages/seed/SeedPage';

import Service from './services/Service';

const App = () => {

    const [currentPage, setCurrentPage] = useState(PageNames.SEED)
    const [currentTheme, setCurrentTheme] = useState(ThemeNames.LIGHT)
    
    let initialGenres: string[];
    initialGenres = [];
    const [availableGenres, setAvailableGenres] = useState(initialGenres)

    useEffect(() => {
      Service.getToken()
        .then(auth_token => {
            console.log(auth_token)

            Service
                .getGenres(auth_token)
                .then(data => setAvailableGenres(data))
        })
    
      return () => {
        // second
      }
    }, [])
    

    const setCurrentPagePass = (newPage: PageNames) => {
        console.log(PageNames[newPage]);
        return setCurrentPage(newPage)
    }

    let CurrentPage = <Homepage setCurrentPage={setCurrentPagePass} theme={currentTheme} /> 

    switch(currentPage) {
        case PageNames.PLAYLIST:
            CurrentPage = <PlaylistPage
                setCurrentPage={setCurrentPagePass}
                theme={currentTheme}/>
            break
        case PageNames.SEED:
            CurrentPage = <SeedPage
                availableGenres={availableGenres}
                setCurrentPage={setCurrentPagePass}
                theme={currentTheme} />
            break
    }
            
 
    return(
        <ThemeProvider theme={Themes[currentTheme]}>
            <Page>
                <Content>
                    <ThemeSwitcher currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}/>
                    {CurrentPage}
                </Content>
            </Page>
        </ThemeProvider>
    )
}

export default App
