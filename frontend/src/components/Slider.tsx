import React from "react";
import styled from "styled-components";
import IconButton from "./button/IconButton";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

const SliderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

const SliderBar = styled.input`
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%;
    background-color: ${p => p.theme.lightColor};
    height: 0.25em;
    display: block;
    border-radius: 0.5em;
    cursor: pointer;

    &::-moz-range-thumb {
        width: 1.5em;
        height: 1.5em;
        border-radius: 1.5em;
        background: ${p => p.theme.sliderColor};
        filter: drop-shadow(0px 3px 6px ${p => p.theme.shadowColor});
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 1.5em;
        height: 1.5em;
        border-radius: 1.5em;
        background: ${p => p.theme.sliderColor};
        filter: drop-shadow(0px 3px 6px ${p => p.theme.shadowColor});
    }
`

const TextWrapper = styled.div`
    font-family: ${p => p.theme.bodyFont};
    font-weight: 800;
    width: 15em;
`

type Props = {
    text: string,
    value: number,
    setValue: React.Dispatch<any>
}

const Slider = ({ text, value, setValue }: Props) => {
    return (
        <SliderWrapper>
            <TextWrapper>{text}</TextWrapper>
            <SliderBar type="range" min="0" max="1" step="0.005" value={value} onChange={e => setValue(e.target.value)} id="myRange" list="snap"/>
            <IconButton icon={faArrowRotateRight} onClick={() => setValue(0.5)}/>
        </SliderWrapper>
    )
}

export default Slider