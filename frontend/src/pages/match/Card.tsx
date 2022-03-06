import { faHeart, faHeartCrack, faPlay, faE, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "../../components/Image";

const MatchButton = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5em;
    width: 2em;
    height: 2em;
    border-radius: 1em;

    border: 1px solid ${p => p.theme.lightColor};

    background-color: ${p => p.theme.buttonColor};
    cursor: pointer;
    transition: ${p => p.theme.transition};

    @media (hover: hover) {
        &:hover {
            background-color: ${p => p.theme.accent};
            color: ${p => p.theme.invertedColor};
        }
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PlayButton = styled(MatchButton)`
    font-size: 2em;
    width: 2.5em;
    /* padding-left: 0.15em; */
`

const TextWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 0.25em;
    gap: 5px;
    font-family: ${p => p.theme.bodyFont};
`

const Text = styled.div`

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Heading = styled(Text)`
    width: 13.5rem;
    font-weight: 800;
    font-size: 1.1em;
`

const CardWrapper = styled.div`
    padding: 1em;
    box-sizing: border-box;
    border-radius: 1em;
    display: flex;
    gap: 10px;
    width: 17em;
    flex-direction: column;
    background-color: ${p => p.theme.buttonColor};
    /* filter: drop-shadow(0px 3px 6px ${p => p.theme.shadowColor}); */

    position:absolute;
    transition: 0.2s ease-out;

    border: 1px solid ${p => p.theme.lightColor};

    transform: ${(p: { slide: string }) =>
        p.slide === "L" ? "translateX(-20em) rotate(-15deg)" :
        p.slide === "R" ? "translateX(20em) rotate(15deg)" :
            ""};
    
    opacity: ${(p: { slide: string }) =>
        p.slide !== "" ? "0" :
            ""};
`

const ExplicitWrapper = styled.div`
    top: 0.25rem;
    right: 0.25rem;
    width: 1rem;
    height: 1rem;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.6em;
    border-radius: 0.25em;
    color: ${p => p.theme.backgroundColor};
    background-color: ${p => p.theme.textColor};
`

type Props = {
    track: any,
    onLike: React.Dispatch<any>,
    onDislike: React.Dispatch<any>,
    autoPlay: boolean,
    onLoad: () => any,
    index: number,
    setAutoPlay: React.Dispatch<any>
}

const Explicit = () => <ExplicitWrapper>
    <FontAwesomeIcon icon={faE} />
</ExplicitWrapper>

const useAudio: any = (url: string) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);


    const restart = () => audio.currentTime = 0
    const stop = () => {
        audio.pause()
        setPlaying(false)
        restart()
    }

    audio.volume = 0.5
    audio.onended = () => {
        stop()
    }

    const start = () => {
        audio.play(); setPlaying(true)
    };

    return [playing, start, stop];
};

const Card = ({ setAutoPlay, track, onLike, onDislike, autoPlay, onLoad, index }: Props) => {

    const [slideState, setSlideState] = useState("")
    const [playing, start, stop] = useAudio(track.preview_url)
    
    const like = () => {
        setSlideState("R")
        onLike(track.id)
    }

    const dislike = () => {
        setSlideState("L")
        onDislike(track.id)
    }

    useEffect(() => {

        let timeout: any = null;
        if (autoPlay && !index) {
            timeout = setTimeout(start, 700)
        }

        return () => {
            stop()
            clearTimeout(timeout)
        }
    }, [autoPlay, index])
    

    return (
        <CardWrapper slide={slideState}>
            <Image artist={track.album} size="15em" onLoad={onLoad}/>


            <TextWrapper>
                <Heading>
                    {track.name}
                </Heading>
                <Text>
                    {track.album.name}
                </Text>
                <Text>
                    {track.artists.map((a: {name: string}) => a.name).join(", ")}
                </Text>
                {track.explicit ? <Explicit /> : null}

            </TextWrapper>

            <ButtonWrapper>
                <MatchButton onClick={dislike}>
                    <FontAwesomeIcon icon={faHeartCrack} />
                </MatchButton>
                <PlayButton onClick={() => {playing ? stop() : start(); setAutoPlay(false)}}>
                    <FontAwesomeIcon icon={playing ? faPause : faPlay} />
                </PlayButton>
                <MatchButton onClick={like}>
                    <FontAwesomeIcon icon={faHeart} />
                </MatchButton>
            </ButtonWrapper>
        </CardWrapper>
    )
}

export default Card