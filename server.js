const express = require('express')
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection')
const apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use('/api', apiRoutes)


// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

app.use((req, res) => {
    res.status(404).end()
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})