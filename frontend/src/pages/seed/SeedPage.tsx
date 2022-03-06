import React, { useEffect, useState } from "react"

import { ThemeNames } from "../../themes/ThemeNames"

import Button from "../../components/button/Button"
import SeedHeading from "./SeedHeading"
import Heading from "../../components/Heading"
import SeedSliders from "./SeedSliders"
import GenreBubbles from "./Genre/GenreBubbles"
import ArtistBubbles from "./Artist/ArtistBubbles"

import { faCircleArrowLeft, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { PageNames } from "../PagesNames"
import TrackBubbles from "./Track/TrackBubbles"

import styled from "styled-components"

const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
`

type Props = {
    setCurrentPage: React.Dispatch<any>,

    availableGenres: Array<string>,

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

    setSeedAttr: React.Dispatch<any>,
    theme: ThemeNames
}

const SeedPage = ({
        setCurrentPage,
        availableGenres,
        seedAttr,
        setSeedAttr,
        theme }: Props) => {
        
    const setAttr = (attr: {
        popularity: number
        danceability: number
        energy: number
        instrumentalness: number
    }) => {
        setSeedAttr({...seedAttr, attr: attr})
    }

    const setSeeds = (seeds: {
        genres: Array<any>,
        artists: Array<any>,
        tracks: Array<any>
    }) => {
        setSeedAttr({ ...seedAttr, seeds: seeds })
    }

    const reset = () => {
        console.log("reset!");
    }


    useEffect(() => {

        const totalLength = seedAttr.seeds.artists.length + seedAttr.seeds.genres.length + seedAttr.seeds.tracks.length

        if (totalLength === 0) window.alert("Add at least one genre, artist, or track!")
    
    }, [])
    

    return (
        <>
            <Heading text="Seed settings"/>

            <SeedSliders attr={seedAttr.attr} setAttr={setAttr}/>

            <GenreBubbles 
                availableGenres={availableGenres} 
                selectedGenres={seedAttr.seeds.genres} 
                setSelectedGenres={g => setSeeds({ ...seedAttr.seeds, genres: g})}/>
            
            <ArtistBubbles
                currentArtists={seedAttr.seeds.artists}
                setArtists={a => setSeeds({...seedAttr.seeds, artists: a})}
            />

            <TrackBubbles
                currentTracks={seedAttr.seeds.tracks}
                setTracks={t => setSeeds({...seedAttr.seeds, tracks: t})}
            />
            <ButtonWrapper>
                <Button icon={faCircleArrowLeft} text="Home" onClick={() => setCurrentPage(PageNames.PLAYLIST)} />
            </ButtonWrapper>
        </>
    )
}

export default SeedPage
