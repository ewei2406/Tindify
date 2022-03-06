const axios = require('axios')

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

const getMatches = async (auth_token: string, artists: string, tracks: string, genres: string): Promise<Array<any>> => {
    const config = {
        headers: { 'Authorization': `${auth_token}` },
        params: {
            type: "track",
            artists: artists,
            tracks: tracks,
            genres: genres,
        }
    }

    return axios
        .get("/token/recs", config)
        .then((data: any) => data.data.tracks.filter((t: { preview_url: string}) => t.preview_url !== null))
}

const Service = { getToken, getGenres, getArtistSearch, getTrackSearch, getMatches }

export default Service