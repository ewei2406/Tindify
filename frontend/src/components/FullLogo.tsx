import React from "react";
import styled from "styled-components";

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

const FullLogo = () => <Wrapper>
    <Logo src={require("../assets/FullLogo.png")} alt="" width={1000} />
</Wrapper>

export default FullLogo