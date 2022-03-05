import React from "react"
import Pagewrapper from "../Pagewrapper"
import FullLogo from "../../components/FullLogo"
import MenuButtons from "./MenuButtons"
import styled from "styled-components"

const HomepageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 25px;
    top: 25%;
`

const Homepage = ({ setCurrentPage }: { setCurrentPage: any }) => {
    return (
        <Pagewrapper>
            <HomepageWrapper>
                <FullLogo/>
                <MenuButtons setCurrentPage={setCurrentPage}/>
            </HomepageWrapper>
        </Pagewrapper>
    )
}

export default Homepage
