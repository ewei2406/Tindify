import React from "react"
import FullLogo from "../../components/image/FullLogo"
import MenuButtons from "./MenuButtons"
import styled from "styled-components"
import { ThemeNames } from "../../themes/ThemeNames"

const HomepageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 25px;
    top: 25%;
`

const Homepage = ({ setCurrentPage, theme }: { setCurrentPage: React.Dispatch<any>, theme: ThemeNames }) => {
    return (
        <>
            <HomepageWrapper>
                <FullLogo theme={theme}/>
                <MenuButtons setCurrentPage={setCurrentPage}/>
            </HomepageWrapper>
        </>
    )
}

export default Homepage
