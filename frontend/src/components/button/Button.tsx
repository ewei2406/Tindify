import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import styled from 'styled-components';
import { IconWrapper } from './IconWrapper';

const ButtonWrapper = styled.div`
    box-sizing: border-box;
    padding: 0.5em 0.75em;
    /* border: 1px solid ${p => p.theme.lightColor}; */
    
    background-color: ${p => p.theme.buttonColor};
    filter: drop-shadow(0px 3px 6px ${p => p.theme.shadowColor});
    
    justify-content: start;
    border-radius: 1em;
    position: relative;

    font-family: ${p => p.theme.bodyFont};
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    
    transition: ${p => p.theme.transition};
    color: ${p => p.theme.textColor};

    &:hover {
        color: ${p => p.theme.invertedColor};
        background-color: ${p => p.theme.accent};
        border-color: ${p => p.theme.accent};
        /* transform: scale(1.02); */
    }
`

type ButtonProps = {
    text: string;
    icon: typeof faCoffee;
    onClick: () => any;
}

const Button = ({ icon, text, onClick }: ButtonProps) => <ButtonWrapper onClick={onClick}>
    <IconWrapper>
        <FontAwesomeIcon icon={icon} />
    </IconWrapper> 
        {text}
</ButtonWrapper>

export default Button