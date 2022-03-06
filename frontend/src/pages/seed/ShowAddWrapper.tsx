import styled from "styled-components";

export const ShowAddWrapper = styled.div`
    display: flex;
    background-color: ${p => p.theme.lightColor};
    color: ${p => p.theme.invertedColor};
    font-size: 0.9em;
    border-radius: 1rem;
    align-items: center;
    padding: 0.1rem 0.5rem;
    height: 2rem;
    width: 100%;
    box-sizing: border-box;
    padding-left: 0.75rem;
    gap: 2px;
    position: relative;
`