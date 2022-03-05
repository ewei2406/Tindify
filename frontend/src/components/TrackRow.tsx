import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faXmark } from "@fortawesome/free-solid-svg-icons";


const DeleteButton = styled.div`
    border-radius: 10px;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    background-color: ${p => p.theme.textColor};
    color: ${p => p.theme.backgroundColor};
    transition: inherit;
    display: flex;

    filter: opacity(0);

    &:hover {
        color: ${p => p.theme.invertedColor};
        background-color: ${p => p.theme.delete};
    }
`

const TrackWrapper = styled.div`
    width: 100%;
    background-color: ${p => p.theme.buttonColor};
    filter: drop-shadow(0px 3px 6px ${p => p.theme.shadowColor});
    box-sizing: border-box;
    padding: 0.75em;
    border-radius: 1em;
    position: relative;

    font-family: ${p => p.theme.bodyFont};
    display: flex;
    gap: 0.75em;
    align-items: center;
    cursor: pointer;
    
    transition: ${p => p.theme.transition};
    color: ${p => p.theme.textColor};

    &:hover {
        color: ${p => p.theme.invertedColor};
        background-color: ${p => p.theme.accent};
        border-color: ${p => p.theme.accent};
        /* transform: scale(1.02); */
    }

     &:hover ${DeleteButton} {
        filter: opacity(1);
    }
`

const ImgWrapper = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.5em;
    position: relative;
    border-radius: 0.25em;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: ${p => p.theme.lightColor};
`

const Img = styled.img`
    width: 100%;
    position: absolute;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    height: 3.5rem;
    font-size: 0.9em;
    justify-content: center;
`

const TrackName = styled.div`
    font-weight: ${p => p.theme.titleWeight};
`

const TrackAlbum = styled.div`
    
`

const Artists = styled.div`
    
`



const TrackRow = ({ track, removeTrack }: { track: any, removeTrack: (id: string) => void }) => {
    return(
        <TrackWrapper>
            <ImgWrapper>
                <Img src={""} alt="" />
                <FontAwesomeIcon icon={faMusic}/>
            </ImgWrapper>
            <Text>
                <TrackName>{track.name}</TrackName>
                <TrackAlbum>{track.album.name}</TrackAlbum>
                <Artists>{track.artists.join(", ")}</Artists>
            </Text>
            <DeleteButton onClick={() => removeTrack(track.id)}>
                <FontAwesomeIcon icon={faXmark} />
            </DeleteButton>
        </TrackWrapper>
    )
}

export default TrackRow