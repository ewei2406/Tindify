import styled from "styled-components";

export const HeadingWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    z-index: 9999;
`

export const AddWrapper = styled.div`
    max-width: 100%;
    font-size: 1.5em;
    display: flex;
    background-color: ${p => p.theme.buttonColor};
    position: relative;
`