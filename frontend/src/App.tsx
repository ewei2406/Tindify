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

const url = window.location.hash
const access_token = new URLSearchParams(url).get('#access_token');

const App = () => {

    const [currentPage, setCurrentPage] = useState(access_token === null ? PageNames.HOME : PageNames.PLAYLIST)
    const [currentTheme, setCurrentTheme] = useState(ThemeNames.LIGHT)
    const [seedAttr, setSeedAttr] = useState({
        attr: {
            popularity: 0.5,
            danceability: 0.5,
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

    const currentDataHandler = (newData: any) => {
        setCurrentData(newData)
        localStorage.setItem("CURRENTDATA", JSON.stringify(newData))
    }

    useEffect(() => {
      Service.getToken()
        .then(auth_token => {
            // console.log(auth_token)
            Service
                .getGenres(auth_token)
                .then(data => setAvailableGenres(data))

        })

        const storedTheme = localStorage.getItem("THEME") || ""

        if (Object.values<string>(ThemeNames).includes(storedTheme)) {
            console.log("HAS IT")

            // @ts-ignore
            setCurrentTheme(ThemeNames[storedTheme])
        }

        const storedAttr = JSON.parse(localStorage.getItem("ATTR") || "{}")
        const storedSeeds = JSON.parse(localStorage.getItem("SEEDS") || "{}")

        setSeedAttr({
            attr: {
                popularity: storedAttr.popularity || 0.5,
                danceability: storedAttr.danceability || 0.5,
                energy: storedAttr.energy || 0.5,
                instrumentalness: storedAttr.instrumentalness || 0.5,
            },
            seeds: {
                genres: storedSeeds.genres || [],
                artists: storedSeeds.artists || [],
                tracks: storedSeeds.tracks || []
            }
        })

        const storedCurrentData = JSON.parse(localStorage.getItem("CURRENTDATA") || "{}")

        setCurrentData({
            title: storedCurrentData.title || "Playlist",
            tracks: storedCurrentData.tracks || [],
            seen: storedCurrentData.seen || []
        })
    
      return () => {
        // second
      }
    }, [])
    
    const reset = () => {
        localStorage.removeItem("ATTR")
        localStorage.removeItem("SEEDS")
        localStorage.removeItem("CURRENTDATA")
        window.location.reload()
    }

    const setCurrentPagePass = (newPage: PageNames) => {
        console.log(PageNames[newPage]);
        return setCurrentPage(newPage)
    }

    let CurrentPage = <Homepage setCurrentPage={setCurrentPagePass} theme={currentTheme}/> 

    switch(currentPage) {
        case PageNames.PLAYLIST:
            CurrentPage = <PlaylistPage
                currentData={currentData}
                setCurrentData={currentDataHandler}
                setCurrentPage={setCurrentPagePass}
                reset={reset}
                theme={currentTheme}/>
            break
        case PageNames.SEED:
            CurrentPage = <SeedPage
                availableGenres={availableGenres}
                setCurrentPage={setCurrentPagePass}
                seedAttr={seedAttr}
                setSeedAttr={(v: any) => {
                    localStorage.setItem("ATTR", JSON.stringify(v.attr))
                    localStorage.setItem("SEEDS", JSON.stringify(v.seeds))
                    setSeedAttr(v)
                }}
                theme={currentTheme} />
            break
        case PageNames.MATCH:
            CurrentPage = <MatchPage
                setCurrentPage={setCurrentPagePass}
                seedAttr={seedAttr}
                setCurrentData={currentDataHandler}
                currentData={currentData}
                theme={currentTheme} />
            break
    }
            
 
    return(
        <ThemeProvider theme={Themes[currentTheme]}>
            <Page>
                <Content>
                    <ThemeSwitcher currentTheme={currentTheme} setCurrentTheme={(t: ThemeNames) => {
                        setCurrentTheme(t)
                        localStorage.setItem("THEME", ThemeNames[t])
                    }}/>
                    {CurrentPage}
                </Content>
            </Page>
        </ThemeProvider>
    )
}

export default App
