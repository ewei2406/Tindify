import React from "react";
import styled from "styled-components";
import { ThemeNames } from "../../themes/ThemeNames";

const Wrapper = styled.div`
    max-width: 400px;
    max-height: 150px;
    display: flex;
    justify-content: center;
    align-self: center;
`

const Logo = styled.img`
    width: 100%;
    align-self: center;
`

const FullLogo = ({ theme }: { theme: ThemeNames }) => <Wrapper>
    {theme === ThemeNames.LIGHT
        ? <Logo src={require("../../assets/Logo.png")} alt=""/>
        : <Logo src={require("../../assets/InvertedLogo.png")} alt="" />
    }
</Wrapper>

export default FullLogo