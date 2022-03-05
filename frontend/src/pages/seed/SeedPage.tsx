import React, { useState } from "react"

import { ThemeNames } from "../../themes/ThemeNames"

import Button from "../../components/button/Button"
import SeedHeading from "./SeedHeading"
import Heading from "../../components/Heading"
import SeedSliders from "./SeedSliders"
import GenreBubbles from "./GenreBubbles"

import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { PageNames } from "../PagesNames"

type Props = {
    setCurrentPage: React.Dispatch<any>,
    availableGenres: Array<string>,
    theme: ThemeNames
}

const SeedPage = ({
        setCurrentPage,
        availableGenres,
        theme }: Props) => {

    const [attr, setAttr] = useState({
        popularity: 0.5,
        danceability: 0.5,
        energy: 0.5,
        instrumentalness: 0.5,
    })

    const [seeds, setSeeds] = useState({
        genres: [],
        artists: [],
        tracks: []
    })
    
    return (
        <>
            <Button icon={faCircleArrowLeft} text="Back" onClick={() => setCurrentPage(PageNames.PLAYLIST)} />
            <Heading text="Seed settings"/>

            <SeedSliders attr={attr} setAttr={setAttr}/>

            <GenreBubbles 
                availableGenres={availableGenres} 
                selectedGenres={seeds.genres} 
                setSelectedGenres={g => setSeeds({...seeds, genres: g})}/>
            
            <SeedHeading text="Seed artists" onClick={() => null} />
            <SeedHeading text="Seed tracks" onClick={() => null}/>
            
        </>
    )
}

export default SeedPage
