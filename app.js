const express = require('express')
const path = require('path')

const app = express()

let usersRoutes = require('./routes/users')
let mainRoutes = require('./routes/main')

//cambiarlo a '/users' y que logre tomarme la ruta
app.use('/', usersRoutes)
app.use('/', mainRoutes)


const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`server started on port: ${port}`));

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs')

