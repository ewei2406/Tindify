import React from "react"
import styled from "styled-components"

const SwitchWrapper = styled.div`
    border: 1px solid ${p => p.theme.lightColor};
    border-radius: 1em;
    box-sizing: border-box;
    width: 2em;
    height: 1.25em;
    background-color: ${(p: { activated: boolean, theme: any }) => p.activated ? p.theme.accent : p.theme.buttonColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.1em;

    transition: ${p => p.theme.transition};

`

const SwitchThumb = styled.div`
    display: inline-block;
    border-radius: 1em;

    width: 1em;
    height: 1em;

    background-color: ${p => p.theme.buttonColor};
    border: 1px solid ${p => p.theme.lightColor};
    box-sizing: border-box;

    transition: ${p => p.theme.transition};
    
    margin-left: ${(p: { activated: boolean}) => p.activated ? "0.675em" : "0"};
`

type Props = {
    value: boolean,
    setValue: React.Dispatch<any>
}

const Switch = ({ value, setValue }: Props) => <SwitchWrapper activated={value} onClick={() => setValue(!value)}>
    <SwitchThumb activated={value}></SwitchThumb>
</SwitchWrapper>

export default Switch