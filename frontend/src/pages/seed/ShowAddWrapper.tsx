import styled from "styled-components";

export const ShowAddWrapper = styled.div`
    display: flex;
    background-color: ${p => p.theme.lightColor};
    color: ${p => p.theme.invertedColor};
    font-size: 1rem;
    border-radius: 1em;
    align-items: center;
    padding: 0.1em 0.5em;
    height: 2em;
    width: 100%;
    box-sizing: border-box;
    padding-left: 0.75em;
    gap: 2px;
    position: relative;
`