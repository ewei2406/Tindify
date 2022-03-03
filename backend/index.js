const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello!")
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})