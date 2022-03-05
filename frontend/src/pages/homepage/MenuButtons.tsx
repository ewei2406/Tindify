import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";
import { faUser, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { PageNames } from "../PagesNames";

const MenuButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 15px;

`

const MenuButtons = ({ setCurrentPage }: { setCurrentPage: React.Dispatch<any> }) => {
    return (
        <MenuButtonWrapper>
            <Button icon={faArrowCircleRight} text="Login through Spotify" onClick={() => setCurrentPage(PageNames.AUTH)} />
            <Button icon={faUser} text="Continue as a guest" onClick={() => setCurrentPage(PageNames.PLAYLIST)} />
        </MenuButtonWrapper>
    )
}

export default MenuButtons