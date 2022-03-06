const axios = require('axios')
const qs = require('qs')

const getToken = async (): Promise<string> => {
    return axios
        .get("/getToken")
        .then((data: any) => data.data.access_token)
}

const getGenres = async (auth_token: string): Promise<Array<string>> => {
    const config = {
        headers: { 'Authorization': `${auth_token}` },
    }

    return axios
        .get("/token/getGenres", config)
        .then((data: any) => data.data.genres)
}

const getArtistSearch = async (auth_token: string, query: string): Promise<Array<any>> => {
    const config = {
        headers: { 'Authorization': `${auth_token}` },
        params: {
            type: "artist",
            query: query
        }
    }

    return axios
        .get("/token/search", config)
        .then((data: any) => data.data.artists.items)
}

const getTrackSearch = async (auth_token: string, query: string): Promise<Array<any>> => {
    const config = {
        headers: {'Authorization': `${auth_token}` },
        params: {
            type: "track",
            query: query
        }
    }

    return axios
        .get("/token/search", config)
        .then((data: any) => data.data.tracks.items)
}

const getMatches = async (auth_token: string, artists: string, tracks: string, genres: string, limit=15, popularity=0.5, danceability=0.5, energy=0.5, instrumentalness=0.5): Promise<Array<any>> => {
    const config = {
        headers: { 'Authorization': `${auth_token}` },
        params: {
            type: "track",
            artists: artists,
            tracks: tracks,
            genres: genres,
            limit: limit,

            popularity: popularity * 100,
            danceability: danceability,
            energy: energy,
            instrumentalness: instrumentalness,
        }
    }

    console.log(config.params)

    return axios
        .get("/token/recs", config)
        .then((data: any) => data.data.tracks.filter((t: { preview_url: string}) => t.preview_url !== null))
}

const getUserId = async (user_token: string) => {
    const config = {
        headers: { 'Authorization': `${user_token}` },
    }

    return axios
        .get("/userToken/getUser", config)
        .then((data: any) => data.data)
}

const makeEmptyPlaylist = async (user_token: string, auth_token: string, playlistName: string) => {
    return getUserId(user_token).then(user =>{

        const config = {
            headers: { 
                'Authorization': `${user_token}`,
                // 'Content-Type': 'application/json'
            }
        }

        const data = ({
            playlistName: playlistName,
            userid: user.id
        })

        return axios
            .post("/userToken/makeplaylist", data, config)
            .then((data: any) => data)
    })
}

const makePlaylist = async (user_token: string, auth_token: string, playlistName: string, uris: Array<string>) => {
    return getUserId(user_token).then(user => {

        const config = {
            headers: {
                'Authorization': `${user_token}`,
                // 'Content-Type': 'application/json'
            }
        }

        const data = ({
            playlistName: playlistName,
            userid: user.id
        })

        return axios
            .post("/userToken/makeplaylist", data, config)
            .then((playlist: any) => {
                console.log("S")
                console.log(playlist)

                const config = {
                    headers: {
                        'Authorization': `${user_token}`,
                        // 'Content-Type': 'application/json'
                    }
                }

                const data = {
                    uris: uris,
                    playlistid: playlist.data.id
                }

                return axios
                    .post("/userToken/addtoplaylist", data, config)
                    .then((data: any) => data)
            })
    })
}


const Service = { getToken, getGenres, getArtistSearch, getTrackSearch, getMatches, makePlaylist }

export default Service