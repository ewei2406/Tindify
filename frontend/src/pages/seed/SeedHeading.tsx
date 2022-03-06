import React from "react"
import Heading from "../../components/Heading"
import styled from "styled-components"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import IconButton from "../../components/button/IconButton"

const HeadingWrapper = styled.div`
    display: flex;
    gap: 5px;
    width: 100%;
    font-size: 1.5em;
`

const SeedHeading = ({ text, onClick }: { text: string, onClick: () => any }) => {
    return (
        <HeadingWrapper>
            <Heading text={text} />
            <IconButton icon={faPlusCircle} onClick={() => null}/>
        </HeadingWrapper>
    )
}

export default SeedHeading