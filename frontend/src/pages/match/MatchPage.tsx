import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { ThemeNames } from "../../themes/ThemeNames"
import Button, { ButtonWrapper } from "../../components/button/Button"
import { faCircleArrowLeft, faSeedling } from "@fortawesome/free-solid-svg-icons"
import { PageNames } from "../PagesNames"
import SmallLogo from "../../components/image/SmallLogo"
import Service from "../../services/Service"
import Card from "./Card"
import Subtext from "../../components/Subtext"
import Switch from "./Switch"

const CardsWrapper = styled.div`
    position: relative;
    width: 17em;
    height: 100%;
`

type Props = { 
    setCurrentPage: React.Dispatch<any>, 
    seedAttr: {
        attr: {
            popularity: number
            danceability: number
            energy: number
            instrumentalness: number
        },
        seeds: {
            genres: Array<any>,
            artists: Array<any>,
            tracks: Array<any>
        }
    },
    currentData: { title: string, tracks: Array<any>, seen: Array<any> },
    setCurrentData: React.Dispatch<any>,
    theme: ThemeNames 
}

const BottomWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const AutoplayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CenterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    flex-grow: 2;
    /* margin: 10em 0; */
`

const MatchPage = ({ setCurrentPage, theme, seedAttr, currentData, setCurrentData }: Props) => {

    let initalMatches: Array<any>
    initalMatches = []
    const [matches, setMatches] = useState(initalMatches)
    const [queried, setQueried] = useState(false)
    const [autoPlay, setAutoPlay] = useState(false)

    // useEffect(() => {
    //     getMatches()
    // }, [])

    const totalLength = seedAttr.seeds.artists.length + seedAttr.seeds.genres.length + seedAttr.seeds.tracks.length

    const loadMatches = (limit=15, overrideTracks: null | string = null) => {

        console.log("QUERYING")

        let randArtist = ""
        if (seedAttr.seeds.artists.length > 0) {
            randArtist = seedAttr.seeds.artists[Math.floor((seedAttr.seeds.artists.length - 1) * Math.random())].id
        }

        let randGenre = ""
        if (seedAttr.seeds.genres.length > 0) {
            randGenre = seedAttr.seeds.genres[Math.floor((seedAttr.seeds.genres.length - 1) * Math.random())]
        }

        let randTracks: Array<any> = []
        if (seedAttr.seeds.tracks.length > 0) {
            randTracks.push(seedAttr.seeds.tracks[Math.floor((seedAttr.seeds.tracks.length - 1) * Math.random())].id)
        }

        if (currentData.tracks.length > 0) {
            randTracks.push(currentData.tracks[Math.floor((currentData.tracks.length - 1) * Math.random())].id)
            randTracks.push(currentData.tracks[Math.floor((currentData.tracks.length - 1) * Math.random())].id)
        }

        const randTrack = randTracks.join(",")

        console.log(randArtist, "+", randGenre, "+", randTracks)

        Service.getToken().then(auth_token => {
            Service
                .getMatches(auth_token, randArtist, overrideTracks || randTrack, randGenre, limit,
                    seedAttr.attr.popularity,
                    seedAttr.attr.danceability,
                    seedAttr.attr.energy,
                    seedAttr.attr.instrumentalness,
                    )
                .then(data => {
                    console.log(data)
                    console.log(currentData.seen)
                    const results = data.filter(track => !currentData.seen.includes(track.id))
                    if (results.length !== 0) { setMatches(results); setQueried(false) }
                    else { loadMatches(limit + 10, data.slice(0, Math.min(3, data.length)).map(t => t.id).join(",")) }
                })
        })
    }

    const removeMatch = (id: string) => {
        setTimeout(() => setMatches(matches.filter(m => m.id !== id)), 200) 
        setCurrentData({...currentData, seen: [...currentData.seen, id]})
    }

    const addTrack = (track: any) => {
        if (!currentData.tracks.some(t => t.id === track.id)) setCurrentData({ ...currentData, tracks: [...currentData.tracks, track] })
    }

    useEffect(() => {
        if (matches.length === 0 && !queried && totalLength !== 0) {
            setQueried(true)
            loadMatches()
        }
    
    }, [matches.length, queried])

    return (
        <>
            <SmallLogo theme={theme}/>

            {(totalLength !== 0)
                ? <CardsWrapper>
                    {matches.map((track, i) => <Card
                        key={track.id}
                        track={track}
                        onLike={(id) => {removeMatch(id); addTrack(track)}}
                        onDislike={(id) => removeMatch(id)}
                        autoPlay={autoPlay}
                        setAutoPlay={setAutoPlay}
                        onLoad={() => console.log("LOADED")}
                        index={matches.length - i - 1}
                    />)}
                    {matches.length === 0 ? <CenterWrapper>
                        <Subtext text="Loading new matches..." />
                    </CenterWrapper> : ""}
                </CardsWrapper>
            : <>
                <CenterWrapper>
                    <Subtext text="Add some seeds to get matches!"/>
                    <Button icon={faSeedling} text={"Configure Seed"} onClick={() => setCurrentPage(PageNames.SEED)} />
                </CenterWrapper>
            </>}

            <BottomWrapper>
                <Button icon={faCircleArrowLeft} text="Playlist" onClick={() => setCurrentPage(PageNames.PLAYLIST)} />
                <AutoplayWrapper>
                    <Switch value={autoPlay} setValue={setAutoPlay}/> <Subtext text="Autoplay"/>
                </AutoplayWrapper>
            </BottomWrapper>
        </>
    )
}

export default MatchPage
