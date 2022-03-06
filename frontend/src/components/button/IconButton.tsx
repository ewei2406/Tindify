import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const IconWrapper = styled.div`
    width: 1em;
    height: 1em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    transition: ${p => p.theme.transition};
    color: inherit;

    @media (hover: hover) {
        &:hover {
            color: ${p => p.theme.accent};
        }
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