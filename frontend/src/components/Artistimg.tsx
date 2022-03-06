import React from "react";
import styled from "styled-components";

const Imgwrapper = styled.div`
    width: ${(props: {size: any}) => props.size || "2em"};
    height: ${(props: { size: any }) => props.size || "2em"};
    overflow: hidden;
    border-radius: 0.5em;
    background-color: black;
    flex-grow: 0;
    flex-shrink: 0;
`

const Img = styled.img`
    width: 100%;
`

const ArtistImg = ({ artist, size }: { artist: {images: Array<any>}, size: any}) => {
    const img_src = artist.images.length > 0 ? artist.images[0].url : ""
    return (
        <Imgwrapper size={size}>
            <Img src={img_src} alt="" />
        </Imgwrapper>
    )
}

export default ArtistImg