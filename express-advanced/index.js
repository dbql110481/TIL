const movies = require('./routes/movies')
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
app.use(movies);

app.set('view engine', 'pug');
app.set('views', './views'); // Default

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

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listen on port ${port}`));