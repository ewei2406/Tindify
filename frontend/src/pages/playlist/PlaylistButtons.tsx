import Button from "../../components/button/Button"
import React from "react"
import { faArrowRotateRight, faExclamationCircle, faSeedling, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { PageNames } from "../PagesNames"
import { loginUrl } from "../../LoginUrl"
import Service from "../../services/Service"

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;
`

const url = window.location.hash
const access_token = new URLSearchParams(url).get('#access_token');

const PlaylistButtons = ({ setCurrentPage, currentData, reset }: { setCurrentPage: React.Dispatch<any>, currentData: any, reset: () => void}) => {
    return (
        <ButtonsWrapper>
            <Button icon={faSeedling} text={"Configure Seed"} onClick={() => setCurrentPage(PageNames.SEED)} />
            <Button icon={faShareNodes} text={access_token === null ? "Login to export" : "Export to Spotify"} onClick={() => {
                if (access_token === null) {
                    window.open(loginUrl, "_self")
                } else {
                    // EXPORT
                    if (currentData.tracks.length !== 0) {
                        Service.getToken().then(auth_token => {
                            Service
                                .makePlaylist(access_token, auth_token, currentData.title, currentData.tracks.map((t: any) => t.uri))
                                .then((data: any) => {
                                    console.log(data.data)
                                    if (data.status === 401) window.open(loginUrl, "_self")
                                    else if (data.status === 200) window.alert(`Created playlist: ${currentData.title}`)
                                    else window.alert("Unknown error: " + data)
                                })
                        })
                    } else {
                        window.alert(`Error: No tracks`)
                    }
                    
                }
            }} />
            <Button icon={faArrowRotateRight} text="Reset" onClick={() => { if (window.confirm("Reset all?")) reset() }} />
        </ButtonsWrapper>
    )
}

export default PlaylistButtons