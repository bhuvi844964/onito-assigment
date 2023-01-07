const express = require('express')
const router = require('./routes/Router.js')
const app = express()
require('./models')


app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.use('/api/v1', router)



const PORT = process.env.PORT || 8000


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})