import styled from "styled-components"

export const Page = styled.div`
    transition: ${p => p.theme.transition};
    background-color: ${p => p.theme.backgroundColor};
    position: fixed;
    margin: 0;

    color: ${p => p.theme.textColor};

    display: flex;
    padding: 20px;
    justify-content: center;
    left: 0;
    right: 0;
    top: 0px;
    bottom: 0;

    overflow: none;
`