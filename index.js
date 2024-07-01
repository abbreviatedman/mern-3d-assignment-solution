const express = require('express');
const path = require('path');

const viewRouter = require('./routes/client/viewRouter')
const pokemonRouter = require('./routes/api/pokemonRouter')
const connectToDatabase = require('./database/mongodb')

const app = express();
// set CSS/images/any static asset folder
app.use(express.static(path.join(__dirname, 'public')))
// set what engine to use for res.render
app.set('view engine', 'ejs')
// set where those res.rendered files live
app.set('views', path.join(__dirname, 'views'))

app.use('/', viewRouter);
app.use('/api/pokemon', pokemonRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
    connectToDatabase();
});