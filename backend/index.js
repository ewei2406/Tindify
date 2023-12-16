const express = require('express')
const qs = require('qs')
const axios = require('axios')
const bodyParser = require('body-parser');
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./build"))

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'build')});
});

app.get('/ping', (req, res) => {
    res.send('pong!')
})

app.get('/header', (req, res) => {
    res.sendFile('./LogoWhite.png', { root: __dirname })
})

app.get('/getToken', (req, res) => {
    const config = {
        headers: { 'Authorization': `Basic ${auth_token}` },
    }

    const data = qs.stringify({
        grant_type: 'client_credentials'
    })

    axios
        .post('https://accounts.spotify.com/api/token', data, config)
        .then(data => res.json(data.data))
        .catch(err => res.json(err))
})

app.get('/token/getGenres', (req, res) => {
    const config = {
        headers: { 'Authorization': `Bearer ${req.headers.authorization}` },
    }

    axios
        .get('https://api.spotify.com/v1/recommendations/available-genre-seeds', config)
        .then(data => res.json(data.data))
        .catch(err => res.json(err))
})

app.get('/token/search', (req, res) => {
    const config = {
        headers: { 'Authorization': `Bearer ${req.headers.authorization}` },
        params: {
            'q': req.query.query,
            'offset': 0,
            'type': req.query.type,
            'limit': 10,
            'market': 'US'
        }
    }

    axios
        .get('https://api.spotify.com/v1/search', config)
        .then(data => res.json(data.data))
        .catch(err => res.json(err))
})

app.get('/token/recs', (req, res) => {
    const config = {
        headers: { 'Authorization': `Bearer ${req.headers.authorization}` },
        params: {
            'seed_artists': req.query.artists,
            'seed_genres': req.query.genres,
            'seed_tracks': req.query.tracks,
            'target_popularity': req.query.popularity,
            'target_danceability': req.query.danceability,
            'target_energy': req.query.energy,
            'target_instrumentalness': req.query.instrumentalness,
            'limit': req.query.limit,
            'market': 'US'
        }
    }

    axios
        .get('https://api.spotify.com/v1/recommendations', config)
        .then(data => {res.json(data.data)})
        .catch(err => res.json(err))
})

app.get('/userToken/getUser', (req, res) => {
    // Use a user token! Get using spotify authentication URI
    const config = {
        headers: { 'Authorization': `Bearer ${req.headers.authorization}` },
    }

    axios
        .get('https://api.spotify.com/v1/me', config)
        .then(data => res.json(data.data))
        .catch(err => res.json(err))
})

app.post('/userToken/makeplaylist', (req, res) => {
    // Use a user token! Get using spotify authentication URI

    const config = {
        headers: { 
            'Authorization': `Bearer ${req.headers.authorization}`,
            // 'Content-Type': 'application/json',
        },
    }

    const data = ({
        name: req.body.playlistName || "Generated playlist",
        description: "Generated by Music Rec",
        public: false
    })

    console.log("https://api.spotify.com/v1/users/" + req.body.userid + "/playlists")

    console.log(data)

    axios
        .post("https://api.spotify.com/v1/users/" + req.body.userid + "/playlists", data, config)
        .then(data => {res.json(data.data)})
        .catch(err => res.json(err))
})

app.post('/userToken/addtoplaylist', (req, res) => {
    // Use a user token! Get using spotify authentication URI
    const config = {
        headers: { 'Authorization': `Bearer ${req.headers.authorization}` },
    }

    const data = {
        uris: req.body.uris
    }

    console.log("https://api.spotify.com/v1/playlists/" + req.body.playlistid + "/tracks")

    axios
        .post("https://api.spotify.com/v1/playlists/" + req.body.playlistid + "/tracks", data, config)
        .then(data => res.json(data.data))
        .catch(err => res.json(err))
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})

module.exports = app