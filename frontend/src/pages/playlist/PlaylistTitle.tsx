import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faSave } from '@fortawesome/free-solid-svg-icons'

const TitleInput = styled.input`
    text-overflow: inherit;
    font-size: inherit;
    color: inherit;
    display: block;
    text-align: center;
    background-color: transparent;
    border: none;

    font-family: inherit;
    font-weight: inherit;
    width: 100%;
    height: inherit;
    margin: inherit;
    padding: inherit;

    &:focus {
        outline: none;
    }
`

const OutsideIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75em;
    width: 100%;
    width: 1em;
    height: 1em;
`

const TitleDisplayWrapper = styled.div`
    max-width: 100%;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    font-family: ${p => p.theme.titleFont};
    font-weight: ${p => p.theme.titleWeight};
    font-size: 2em;
`

const TextWrapper = styled.div`
    flex-shrink: 5;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

`

const PlaylistTitle = ({ title, setTitle }: { title: string, setTitle: React.Dispatch<any> }) => {

    const toDisplay = title === "" ? "Playlist name" : title
    const [edit, setEdit] = useState(false)

    return(
        <TitleDisplayWrapper onClick = { () => setEdit(true) }>
            {edit 
                ? <>
                    <TitleInput value={title}
                        onChange={e => setTitle(e.target.value)}
                        onFocus={e => e.target.setSelectionRange(0, e.target.value.length) }
                        autoFocus
                        onBlur={() => setEdit(false)}
                        onKeyUp={e => e.key === "Enter" ? setEdit(false) : null}
                        />
                    <OutsideIconWrapper>
                        <FontAwesomeIcon icon={faSave} />
                    </OutsideIconWrapper>
                </>
                : <>
                    <TextWrapper>{toDisplay}</TextWrapper>
                    <OutsideIconWrapper>
                        <FontAwesomeIcon icon={faPen} />
                    </OutsideIconWrapper>
                </> }
        </TitleDisplayWrapper>
    )
}

export default PlaylistTitle