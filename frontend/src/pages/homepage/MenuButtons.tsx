import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";
import { faUser, faArrowCircleRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { PageNames } from "../PagesNames";
import { loginUrl } from "../../LoginUrl";

const MenuButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 15px;

`

const MenuButtons = ({ setCurrentPage }: { setCurrentPage: React.Dispatch<any> }) => {
    return (
        <MenuButtonWrapper>
            <Button icon={faArrowCircleRight} text="Login through Spotify" onClick={() => window.open(loginUrl, "_self")} />
            <Button icon={faUser} text="Continue as a guest" onClick={() => setCurrentPage(PageNames.PLAYLIST)} />
        </MenuButtonWrapper>
    )
}

export default MenuButtons