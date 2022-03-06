import styled from "styled-components"

export const Bubble = styled.div`
    border-radius: 1em;
    padding: 0.2em 0.4em;
    padding-left: 0.6em;
    font-family: ${p => p.theme.bodyFont};

    color: ${p => p.theme.invertedColor};
    background-color: ${p => p.theme.lightColor};
    transition: ${p => p.theme.transition};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
        background-color: ${p => p.theme.accent};
        color: ${p => p.theme.invertedColor};
    }
`