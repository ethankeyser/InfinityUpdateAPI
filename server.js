const cors = require('cors')
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.static("public"))
app.use( 
    express.urlencoded({
        extended: true,
    })
)

app.get('/api/versions/currentversion', (req, res) => {
    res.send({"version": "0.2.74", "link": "https://mdamaaio.nyc3.digitaloceanspaces.com/MDMA%20Toolbox%20Setup%20v0.2.74.exe"})
})

app.use(cors())

app.listen(8080, () => console.log('Server started'))