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
import MatchPage from './pages/match/MatchPage';

const App = () => {

    const [currentPage, setCurrentPage] = useState(PageNames.MATCH)
    const [currentTheme, setCurrentTheme] = useState(ThemeNames.LIGHT)

    const [seedAttr, setSeedAttr] = useState({
        attr: {
            popularity: 0.75,
            danceability: 0.25,
            energy: 0.5,
            instrumentalness: 0.5,
        },
        seeds: {
            genres: ["pop"],
            artists: [],
            tracks: []
        }
    })

    let t: Array<any>
    t = []
    const [currentData, setCurrentData] = useState({
        title: "Playlist",
        tracks: t,
        seen: []
    })

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

            // Service
            //     .getTrackSearch(auth_token, "Juice wrld")
            //     .then(data => setCurrentData({...currentData, tracks: data}))
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
                currentData={currentData}
                setCurrentData={setCurrentData}
                setCurrentPage={setCurrentPagePass}
                theme={currentTheme}/>
            break
        case PageNames.SEED:
            CurrentPage = <SeedPage
                availableGenres={availableGenres}
                setCurrentPage={setCurrentPagePass}
                seedAttr={seedAttr}
                setSeedAttr={setSeedAttr}
                theme={currentTheme} />
            break
        case PageNames.MATCH:
            CurrentPage = <MatchPage
                setCurrentPage={setCurrentPagePass}
                seedAttr={seedAttr}
                setCurrentData={setCurrentData}
                currentData={currentData}
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
