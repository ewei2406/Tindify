import styled from "styled-components";

export const HeadingWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
`

export const AddWrapper = styled.div`
    max-width: 100%;
    font-size: 1.5em;
    display: flex;
    background-color: ${p => p.theme.buttonColor};
    position: relative;
`

export const BubbleWrapper = styled.div`
    width: 100%;
    height: 10em;
`

export const BubbleInsideWrapper = styled.div`
    display: flex;
    max-height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    flex-direction: row;
    gap: 5px;

    top: 0;
    bottom: 0;
    
    align-items: baseline;
    justify-content: flex-start;
    flex-wrap: wrap;


    /* justify-content: center; */
`