import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../../../components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faCheckCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { ShowAddWrapper } from "../ShowAddWrapper";
import IconButton from "../../../components/button/IconButton";
import Subtext from "../../../components/Subtext";
import { Bubble } from "../../../components/Bubble";
import { HeadingWrapper, AddWrapper, BubbleWrapper, BubbleInsideWrapper } from "../SeedWrappers";

const Select = styled.select`
    border: none;
    background-color: transparent;
    color: inherit;
    font-size: 1em;
    font-family: ${p => p.theme.bodyFont};

    &:focus {
        outline: none;
    }
`




type Props = {
    setSelectedGenres: React.Dispatch<any>,
    availableGenres: Array < string >, 
    selectedGenres: Array<string> 
}

const GenreBubbles = ({ availableGenres, selectedGenres, setSelectedGenres }: Props) => {

    const [showAdd, setShowAdd] = useState(false)
    const [newGenre, setNewGenre] = useState("acoustic")

    const addGenre = (g: string) => {
        if (!selectedGenres.includes(g)) setSelectedGenres([...selectedGenres, g])
    }

    return (
        <>
            <HeadingWrapper>
                <Heading text={"Genres"}/>
                <AddWrapper>
                    {showAdd
                        ? <ShowAddWrapper>
                            <Select defaultValue={"E"} name="text" onChange={e => { if (e.target.value !== "") addGenre(e.target.value); setShowAdd(false); }}>
                                <option value="">Select a genre...</option>
                                {availableGenres.map(g => <option value={g} key={g}>{g.replace("-", " ")}</option>)}
                            </Select>
                            {/* <IconButton icon={faCheckCircle}
                                onClick={() => { setShowAdd(false); addGenre(newGenre)} } /> */}
                            <IconButton icon={faXmarkCircle}
                                onClick={() => { setShowAdd(false); setNewGenre("") } } />
                        </ShowAddWrapper>
                        : <IconButton icon={faPlusCircle} onClick={() => setShowAdd(true)}/>
                    }
                </AddWrapper>
            </HeadingWrapper>

            <BubbleWrapper>
                <BubbleInsideWrapper>
                    {selectedGenres.map(genre =>
                        <Bubble key={genre} onClick={() => setSelectedGenres(selectedGenres.filter(g => g !== genre))}>
                            {genre}
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </Bubble>
                    )}
                    {selectedGenres.length === 0 ? <Subtext text="No genres selected"/> : ""}
                </BubbleInsideWrapper>
            </BubbleWrapper>
        </>
    )
}

export default GenreBubbles