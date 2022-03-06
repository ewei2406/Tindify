import React, { useState } from "react"

import PlaylistTitle from "./PlaylistTitle"
import PlaylistButtons from "./PlaylistButtons"
import SmallLogo from "../../components/image/SmallLogo"
import { ThemeNames } from "../../themes/ThemeNames"

import CurrentTracks from "./CurrentTracks"
import Heading from "../../components/Heading"
import Button from "../../components/button/Button"

import { faFire } from "@fortawesome/free-solid-svg-icons"
import { PageNames } from "../PagesNames"

type Props = {
    setCurrentPage: React.Dispatch<any>,
    currentData: { title: string, tracks: Array<any> },
    setCurrentData: React.Dispatch<any>,
    theme: ThemeNames
}

const PlaylistPage = ({ 
        setCurrentPage, 
        currentData,
        setCurrentData,
        theme }: Props) => {

    const setPlaylistTitle = (n: string) => setCurrentData({ ...currentData, title: n })
    const setCurrentTracks = (t: Array<any>) => setCurrentData({...currentData, tracks: t})
    
    return (
        <>
            
            <SmallLogo theme={theme}/>
            <PlaylistTitle title={currentData.title} setTitle={setPlaylistTitle}/>
            <PlaylistButtons setCurrentPage={setCurrentPage}/>
            <Heading text="Tracks:"/>
            <CurrentTracks currentTracks={currentData.tracks} setCurrentTracks={setCurrentTracks}/>
            <Button icon={faFire} text="Get matches" onClick={() => setCurrentPage(PageNames.MATCH)}/>

        </>
    )
}

export default PlaylistPage
