import { faArrowCircleRight, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "../../../components/button/IconButton";
import Subtext from "../../../components/Subtext";
import Service from "../../../services/Service";
import { ShowAddWrapper } from "../ShowAddWrapper";
import ArtistImg from "../../../components/Artistimg";

const Input = styled.input`
    border: none;
    background-color: transparent;
    color: inherit;
    font-size: 1em;
    font-family: ${p => p.theme.bodyFont};

    &:focus {
        outline: none;
    }
`

const ResultsWrapper = styled.div`
    border-radius: 0.5em;
    position: absolute;
    top: 2em;
    max-height: 15em;
    overflow-y: auto;
    left: 0;
    background-color: ${p => p.theme.darkColor};
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    box-sizing: border-box;
    z-index: 9999;
`

const ArtistBubble = styled.div`
    border-radius: 0.5em;
    padding: 0.2em;
    font-family: ${p => p.theme.bodyFont};
    height: 2em;
    background-color: ${p => p.theme.darkColor};
    transition: ${p => p.theme.transition};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
        background-color: ${p => p.theme.accent};
        color: ${p => p.theme.invertedColor};
    }
`

const ArtistSearch = ({ setShowAdd, addArtist }: { setShowAdd: React.Dispatch<any>, addArtist: React.Dispatch<any>}) => {

    const [query, setQuery] = useState("")
    let initialRes: any[]
    initialRes = []
    const [results, setResults] = useState(initialRes)
    const [queried, setQueried] = useState(false)


    const search = () => {
        if (query !== "") {
            Service.getToken().then(auth_token => {
                Service.getArtistSearch(auth_token, query)
                    .then(data => {setResults(data); setQueried(true)})
            })
        }
    }

    return (
        <ShowAddWrapper>
            <ResultsWrapper >
                {queried
                    ? results.length !== 0
                        ? results.map(artist => {
                            console.log(artist)
                            return (<ArtistBubble key={artist.id} onClick={e => {setShowAdd(false); addArtist(artist)}}>
                                <ArtistImg artist={artist} size="2em" />
                                {artist.name}
                            </ArtistBubble>)
                        })
                        : <Subtext text="No results found." />
                    : <Subtext text="Press Enter to search." />
                }
            </ResultsWrapper>

            <Input value={query} 
                onChange={e => {setQuery(e.target.value); setQueried(false)}} 
                onKeyDown={e => e.key === "Enter" ? search() : null} 

                autoFocus />

            <IconButton icon={faXmarkCircle}
                onClick={() => { setShowAdd(false); setQuery("") }} />
            
        </ShowAddWrapper>
    )
}

export default ArtistSearch