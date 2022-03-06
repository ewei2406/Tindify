import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../../../components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../../components/button/IconButton";
import Subtext from "../../../components/Subtext";
import { Bubble } from "../../../components/Bubble";
import { HeadingWrapper, AddWrapper, BubbleWrapper, BubbleInsideWrapper } from "../SeedWrappers";
import TrackSearch from "./TrackSearch";
import ArtistImg from "../../../components/Artistimg";

const TextWrapper = styled.div`
    max-width: 100%;
    width: 100%;
`

const Text = styled.div`
    max-width: 100%;
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
    font-weight: 800;
`

const Small = styled.div`
    font-size: 0.75em;
`

type Props = {
    setTracks: React.Dispatch<any>,
    currentTracks: Array<any>,
}

const TrackBubble = styled(Bubble)`
    height: 2.5em;
`

const TrackBubbles = ({ currentTracks, setTracks }: Props) => {

    const [showAdd, setShowAdd] = useState(false)

    const addTrack = (t: any) => {
        if (!currentTracks.some(track => track.id === t.id)) setTracks([...currentTracks, t])
    }

    const truncate = (str: string) => {
        return (str.length > 30) ? str.substr(0, 30 - 1) + '...' : str;
    };


    return (
        <>
            <HeadingWrapper>
                <Heading text={"Tracks"} />
                <AddWrapper>
                    {showAdd
                        ? <TrackSearch setShowAdd={setShowAdd} addTrack={addTrack} />
                        : <IconButton icon={faPlusCircle} onClick={() => setShowAdd(true)} />
                    }
                </AddWrapper>
            </HeadingWrapper>

            <BubbleWrapper>
                <BubbleInsideWrapper>
                    {currentTracks.map(track =>
                        <TrackBubble key={track.id} onClick={() => setTracks(currentTracks.filter(g => g !== track))}>
                            <ArtistImg artist={track.album} size="2em" />
                            <TextWrapper>
                                <Text>{truncate(track.name)}</Text>
                                <Small>{track.artists.map((a: { name: string }) => a.name).join(", ")}</Small>
                            </TextWrapper>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </TrackBubble>
                    )}
                    {currentTracks.length === 0 ? <Subtext text="No tracks selected" /> : ""}
                </BubbleInsideWrapper>
            </BubbleWrapper>
        </>
    )
}

export default TrackBubbles