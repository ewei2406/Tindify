import React, { useState } from "react"

import PlaylistTitle from "./PlaylistTitle"
import PlaylistButtons from "./PlaylistButtons"
import SmallLogo from "../../components/image/SmallLogo"
import { ThemeNames } from "../../themes/ThemeNames"

import CurrentTracks from "./CurrentTracks"
import Heading from "../../components/Heading"
import TempTracks from "../../assets/TempTracks"
import Button from "../../components/button/Button"

import { faFire } from "@fortawesome/free-solid-svg-icons"

type Props = {
    setCurrentPage: React.Dispatch<any>,
    theme: ThemeNames
}

const PlaylistPage = ({ 
        setCurrentPage, 
        theme }: Props) => {

    const [playlistTitle, setPlaylistTitle] = useState("")
    const [currentTracks, setCurrentTracks] = useState(TempTracks)
    
    return (
        <>
            
            <SmallLogo theme={theme}/>
            <PlaylistTitle title={playlistTitle} setTitle={setPlaylistTitle}/>
            <PlaylistButtons setCurrentPage={setCurrentPage}/>
            <Heading text="Tracks:"/>
            <CurrentTracks currentTracks={currentTracks} setCurrentTracks={setCurrentTracks}/>
            <Button icon={faFire} text="Get matches" onClick={() => null}/>

        </>
    )
}

export default PlaylistPage
