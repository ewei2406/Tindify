import React from "react"
import Pagewrapper from "../Pagewrapper"
import FullLogo from "../../components/FullLogo"
import MenuButtons from "./MenuButtons"
import styled from "styled-components"

const HomepageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 25%;
`

const Homepage = () => {
    return (
        <Pagewrapper>
            <HomepageWrapper>
                <FullLogo/>
                <MenuButtons/>
            </HomepageWrapper>
        </Pagewrapper>
    )
}

export default Homepage
