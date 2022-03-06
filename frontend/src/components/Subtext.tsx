import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    color: ${p => p.theme.lightColor};
    font-family: ${p => p.theme.bodyFont};
    font-size: 1rem;
`

const Subtext = ({text}: {text: string}) => {
    return (
        <Wrapper>
            {text}
        </Wrapper>
    )
}

export default Subtext