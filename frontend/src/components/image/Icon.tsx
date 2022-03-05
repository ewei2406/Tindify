import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 75px;
    max-height: 75px;
    display: flex;
    justify-content: center;
    align-self: center;
`

const IconWrapper = styled.img`
    width: 100%;
    align-self: center;
`

const Icon = () => <Wrapper>
    <IconWrapper src={require("../../assets/Icon.png")} alt=""/>
</Wrapper>

export default Icon