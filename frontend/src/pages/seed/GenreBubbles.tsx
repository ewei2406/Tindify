import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "../../components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faPlus, faCheck, faXmark, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../components/button/IconButton";
import Subtext from "../../components/Subtext";

const GenreWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 5px;
`

const GenreBubble = styled.div`
    border-radius: 1em;
    padding: 0.2em 0.4em;
    padding-left: 0.6em;
    font-family: ${p => p.theme.bodyFont};

    background-color: ${p => p.theme.lightColor};
    transition: ${p => p.theme.transition};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
        background-color: ${p => p.theme.delete};
        color: ${p => p.theme.invertedColor};
    }
`

const AddWrapper = styled.div`
    font-size: 1.5em;
    display: flex;
    background-color: ${p => p.theme.buttonColor};
`

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

const ShowAddWrapper = styled.div`
    display: flex;
    background-color: ${p => p.theme.textColor};
    color: ${p => p.theme.invertedColor};
    font-size: 1rem;
    margin-left: 10px;
    border-radius: 1em;
    align-items: center;
    padding: 0.1em 0.5em;
    gap: 2px;
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
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
            <Wrapper>
                <Heading text={"Genres"}/>
                <AddWrapper>
                    {showAdd
                        ? <ShowAddWrapper>
                            <Select name="text" value={newGenre} onChange={e => setNewGenre(e.target.value)}>
                                {availableGenres.map(g => <option value={g} key={g}>{g.replace("-", " ")}</option>)}
                            </Select>
                            <IconButton icon={faCheck}
                                onClick={() => { setShowAdd(false); addGenre(newGenre)} } />
                            <IconButton icon={faXmark}
                                onClick={() => { setShowAdd(false); setNewGenre("") } } />
                        </ShowAddWrapper>
                        : <IconButton icon={faPlusCircle} onClick={() => setShowAdd(true)}/>
                    }
                </AddWrapper>
            </Wrapper>

            <GenreWrapper>
                {selectedGenres.map(genre => 
                    <GenreBubble key={genre} onClick={() => setSelectedGenres(selectedGenres.filter(g => g !== genre))}>
                        {genre}
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </GenreBubble>
                )}

                {selectedGenres.length === 0 ? <Subtext text="No genres selected"/> : ""}
            </GenreWrapper>
        </>
    )
}

export default GenreBubbles