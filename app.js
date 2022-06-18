const express = require("express")
const routes = require("./routes")

//express app
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongoose
require('./config/mongoose')

//Port
const PORT = 8000

//router
app.use(routes)

app.listen(PORT, () => {
    console.log(`Express is run on http://localhost:${PORT}`)
})