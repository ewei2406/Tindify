import Button from "../../components/button/Button"
import React from "react"
import { faSeedling, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { PageNames } from "../PagesNames"

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;
`

const PlaylistButtons = ({ setCurrentPage }: { setCurrentPage: React.Dispatch<any>}) => {
    return (
        <ButtonsWrapper>
            <Button icon={faSeedling} text={"Configure Seed"} onClick={() => setCurrentPage(PageNames.SEED)} />
            <Button icon={faShareNodes} text={"Export to Spotify"} onClick={() => null} />
        </ButtonsWrapper>
    )
}

export default PlaylistButtons