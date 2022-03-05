class Track {
    id = Math.round(Math.random() * 1000)
    name = "Track name" + Math.round(Math.random() * 1000)
    artists = ["Artist 1", "Artist 2"]
    album = {
        name: "Album name",
        img_src: "./Icon.png"
    }
    duration = 172
}

const TempTracks = [
    new Track(), 
    new Track(), 
    new Track(), 
    new Track(),
    new Track(),
    new Track(),
    new Track(),
    new Track(),
    new Track(),
    new Track(),
]

export default TempTracks