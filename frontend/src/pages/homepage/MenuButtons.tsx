import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";
import { faUser, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const MenuButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;

`

const MenuButtons = ({ setCurrentPage }: { setCurrentPage: any }) => {
    return (
        <MenuButtonWrapper>
            <Button icon={faArrowCircleRight} text="Login through Spotify" onClick={() => setCurrentPage()} />
            <Button icon={faUser} text="Continue as a guest" onClick={() => setCurrentPage()} />
        </MenuButtonWrapper>
    )
}

export default MenuButtons