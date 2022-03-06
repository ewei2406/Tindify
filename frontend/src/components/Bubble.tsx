import styled from "styled-components"

export const Bubble = styled.div`
    border-radius: 0.5em;
    padding: 0.25em;
    font-family: ${p => p.theme.bodyFont};

    color: ${p => p.theme.invertedColor};
    background-color: ${p => p.theme.lightColor};
    transition: ${p => p.theme.transition};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (hover: hover) {
        &:hover {
            background-color: ${p => p.theme.accent};
            color: ${p => p.theme.invertedColor};
        }
    }
`