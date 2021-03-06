const express = require("express")
const cors = require("cors")
const routes = require("./routes")



//express app
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
app.use(cors())

//mongoose
require('./config/mongoose')

//Port
const PORT = process.env.PORT || 8000

//router
app.use(routes)

app.listen(PORT, () => {
    console.log(`Express is run on http://localhost:${PORT}`)
})