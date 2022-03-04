import React from "react"
import Pagewrapper from "./Pagewrapper"
import FullLogo from "../FullLogo"

import Button from "../Button"

import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const Homepage = () => {
    return (
        <Pagewrapper>
            <FullLogo/>
            This is the homepage
            <Button icon={faCirclePlus} text="Create new playlist" onClick={() => null}/>
        </Pagewrapper>
    )
}

export default Homepage
