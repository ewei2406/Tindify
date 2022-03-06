import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../../../components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../../components/button/IconButton";
import Subtext from "../../../components/Subtext";
import ArtistSearch from "../Artist/ArtistSearch";
import { Bubble } from "../../../components/Bubble";
import { HeadingWrapper, AddWrapper } from "../HeadingWrapper";

const BubbleWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 5px;
`


type Props = {
    setArtists: React.Dispatch<any>,
    currentArtists: Array<any>,
}

const ArtistBubbles = ({ currentArtists, setArtists }: Props) => {

    const [showAdd, setShowAdd] = useState(false)

    const addArtist = (a: any) => {
        setArtists([...currentArtists, a])
    }


    return (
        <>
            <HeadingWrapper>
                <Heading text={"Artists"} />
                <AddWrapper>
                    {showAdd
                        ? <ArtistSearch setShowAdd={setShowAdd} addArtist={addArtist} />
                        : <IconButton icon={faPlusCircle} onClick={() => setShowAdd(true)} />
                    }
                </AddWrapper>
            </HeadingWrapper>

            <BubbleWrapper>
                {currentArtists.map(artist =>
                    <Bubble key={artist.id} onClick={() => setArtists(currentArtists.filter(g => g !== artist))}>
                        {artist.name}
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </Bubble>
                )}

                {currentArtists.length === 0 ? <Subtext text="No artists selected" /> : ""}
            </BubbleWrapper>
        </>
    )
}

export default ArtistBubbles