const debug = require('debug')('app:startup');
const helmet = require('helmet');
const config = require('config');
const morgan = require('morgan');
const auth = require('./middlewares/auth');
const logger = require('./middlewares/logger');
const Joi = require('joi');
const express = require('express');
const app = express();

console.log(app.get('env'));
console.log(app.get('debug'));

app.use(helmet());
if(process.env.NODE_ENV === 'development') {
    debug('MORGAN을 실행합니다.');
    app.use(morgan('dev')); 
}

app.use( express.json() );
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use( logger );
app.use( auth );

app.set('view engine', 'pug');
app.set('views', './views'); // Default

const movies = [
    { id: 1, title: 'Bohemian Rhapsody'},
    { id: 2, title: 'Matrix'},
    { id: 3, title: 'Edge of Tommorow'}
]

app.get('/', (req, res) => {
    res.render('index', {
        title: 'HappyHacking',
        greeting: 'May you have HAPPY HACKING'
    })
});

app.get('/:name', (req, res) => {
    res.send(`Hi, ${teq.params.name}`);
});

// CRUD
// CREATE READ UPDATE DESTROY
// POST   GET  PUT    DELETE

/* GET /api/movies/1 */
app.get('/api/movies', (req, res) => {
    res.send(movies);
});

/* GET /api/movies/1 */
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find((movie) => {
        return movie.id === parseInt(req.params.id);
    });
    if(!movie){
        res.status(404).send(`Movie with given id(${req.params.id}) is not found`);
    }
    res.send(movie);
});

/* POST /api/movies/1 */
app.post('/api/movies', (req, res) => {
    const schema = {
        title: Joi.string().min(2).required(),
    }

    const result = Joi.validate(req.body, schema);
    console.log(result);

    if(result.error){
        res.status(400).send(result.error.message);
    }

    const movie = {
        id: movies.length + 1,
        title: req.body.title
    };
    movies.push(movie);
    res.send(movies);
});

/* PUT /api/movies/1 */
app.put('/api/movies/:id', (req, res) => {
    const movie = movies.find(movie => movie.id === parseInt(req.params.id))

    if(!movie) {
        return res.status(404).send(`The movie with the given ID(${req.params.id}) was not found`)
    }

    const schema = {
        title: Joi.string().min(2).required(),
    }

    const result = Joi.validate(req.body, schema);

    if(result.error) {
        return res.status(400).send(result.error.message);
    }

    movie.title = req.body.title;
    res.send(movie);
});

/* DELETE /api/movies/1 */
app.delete('/api/movies/:id', (req, res) => {
    const movie = movies.find((movie) => {
        return movie.id === parseInt(req.params.id);
    });

    if(!movie) {
        return res.status(404).send(`The movie with the given ID(${req.params.id}) was not found`)
    }
    const index = movies.indexOf(movie);
    movies.splice(index, 1);

    res.send(movie);    
});

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listen on port ${port}`));