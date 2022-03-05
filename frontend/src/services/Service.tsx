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

const Service = { getToken, getGenres }

export default Service