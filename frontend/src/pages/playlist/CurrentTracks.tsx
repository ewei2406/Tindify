import React from "react";
import styled from "styled-components"
import Subtext from "../../components/Subtext";
import TrackRow from "../../components/TrackRow"

type Props = {
    currentTracks: Array<any>,
    setCurrentTracks: React.Dispatch<any>
}

const TracksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    overflow-y: auto;
    padding: 10px 20px;
    overflow-x: visible;
`

const CurrentTracks = ({ currentTracks, setCurrentTracks }: Props) => {

    const removeTrack = (id: any) => {
        setCurrentTracks(currentTracks.filter(t => t.id !== id))
    }

    return (
        <TracksWrapper>
            {currentTracks.map(track => <TrackRow track={track} key={track.id} removeTrack={removeTrack}/>)}
            {currentTracks.length === 0 ? 
                <Subtext text="No tracks. Make some matches!"/>
            : null}
        </TracksWrapper>
    )
}

export default CurrentTracks