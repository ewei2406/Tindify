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

const Service = { getToken, getGenres, getArtistSearch }

export default Service