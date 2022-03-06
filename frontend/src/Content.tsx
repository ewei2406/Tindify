import styled from "styled-components"

export const Content = styled.div`
    transition: ${p => p.theme.transition};
    /* background-color: ${p => p.theme.backgroundColor}; */

    color: ${p => p.theme.textColor};
    
    gap: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    overflow: none;

    max-width: 600px;
    width: 100%;
    height: 100%;
`