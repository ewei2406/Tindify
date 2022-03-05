import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const IconWrapper = styled.div`
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    transition: ${p => p.theme.transition};
    color: inherit;

    &:hover {
        color: ${p => p.theme.accent};
    }
`

type Props = {
    icon: typeof faCoffee;
    onClick: () => any;
}

const IconButton = ({ icon, onClick }: Props ) => {
    return (
        <IconWrapper>
            <FontAwesomeIcon icon={icon} onClick={onClick} />
        </IconWrapper>
    )
}

export default IconButton