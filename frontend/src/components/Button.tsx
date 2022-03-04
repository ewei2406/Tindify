import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
    font-family: ${p => p.theme.bodyFont};
    font-size: 1.5em;
    display: flex;
    margin: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    
    transition: ${p => p.theme.transition};
    color: ${p => p.theme.textColor};

    &:hover {
        color: ${p => p.theme.accent};
    }
`

type ButtonProps = {
    text: string;
    icon: typeof faCoffee;
    onClick: () => void;
}

const Button = ({ icon, text }: ButtonProps) => <ButtonWrapper>
    <FontAwesomeIcon icon={icon}/>{text}
</ButtonWrapper>

export default Button