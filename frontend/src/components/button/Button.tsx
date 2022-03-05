import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    box-sizing: border-box;
    height: 2em;
    padding-left: 2em;
    padding-right: 0.75em;
    border: 1px solid ${p => p.theme.lightColor};
    justify-content: start;
    border-radius: 1em;
    position: relative;

    font-family: ${p => p.theme.bodyFont};
    display: flex;
    align-items: center;
    cursor: pointer;
    
    transition: ${p => p.theme.transition};
    color: ${p => p.theme.textColor};

    &:hover {
        color: ${p => p.theme.invertedColor};
        background-color: ${p => p.theme.accent};
        border-color: ${p => p.theme.accent};
    }
`

const IconWrapper = styled.div`
    position: absolute;
    left: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
`

type ButtonProps = {
    text: string;
    icon: typeof faCoffee;
    onClick: () => void;
}

const Button = ({ icon, text, onClick }: ButtonProps) => <ButtonWrapper onClick={onClick}>
    <IconWrapper>
        <FontAwesomeIcon icon={icon} />
    </IconWrapper> 
        {text}
</ButtonWrapper>

export default Button