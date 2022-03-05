import React from "react";
import Slider from "../../components/Slider";

type Props = {
    attr: {
        popularity: number,
        danceability: number,
        energy: number,
        instrumentalness: number,
    },
    setAttr: React.Dispatch<any>
}

const SeedSliders = ({ attr, setAttr }: Props) => {
    return (
        <>
            <Slider text="Popularity" value={attr.popularity} setValue={value => setAttr({...attr, popularity: value})}/>
            <Slider text="Danceability" value={attr.danceability} setValue={value => setAttr({ ...attr, danceability: value })}/>
            <Slider text="Energy" value={attr.energy} setValue={value => setAttr({ ...attr, energy: value })}/>
            <Slider text="Instrumentalness" value={attr.instrumentalness} setValue={value => setAttr({ ...attr, instrumentalness: value })} />
        </>
    )
}

export default SeedSliders