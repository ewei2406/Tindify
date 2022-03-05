import React from "react";
import { ThemeNames } from "../themes/ThemeNames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components"

type Props = { 
    currentTheme: ThemeNames, 
    setCurrentTheme: React.Dispatch<any> 
}

const SwitchWrapper = styled.div`
    color: ${p => p.theme.textColor};
    font-size: 1.5em;
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 5px;
    cursor: pointer;
    z-index: 999999;
`


const ThemeSwitcher = ({ currentTheme, setCurrentTheme }: Props) => {



    return (
        <SwitchWrapper 
            onClick={() => setCurrentTheme(
                currentTheme === ThemeNames.LIGHT ? ThemeNames.DARK : ThemeNames.LIGHT)}>
            <FontAwesomeIcon icon={currentTheme === ThemeNames.LIGHT ? faSun : faMoon}/>
        </SwitchWrapper>
    )
}

export default ThemeSwitcher