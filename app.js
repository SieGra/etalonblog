

const express = require('express'); //require express
const app = express();    //setting variable app to express-call
const bodyParser = require('body-parser');

/* Body parser */
app.use(bodyParser.json()); //Body parser now handles json
app.use(bodyParser.urlencoded({extended: false})); 

app.use(express.static(__dirname + '/public')); //setting express to serve statics. __dirname refeers to the folder the file is locaated. statics are in the public folder.

/*  Pug */
app.set('view engine', 'pug');          //Setting the view engine to pug.
app.set('views', __dirname + '/views'); // Setting the views root folder.

/* Routes */
let routes = require('./routes/index');
app.use('/', routes);


/* Error handling */
app.use((req, res, next) => {
    let err = new Error('Page not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    let sessionInfo = {
        message: err.message,
        code: err.status,
        error: {},
        title: 'Error'
    }

    res.status(err.status || 500);
    res.render('error', sessionInfo);

});

/* Setting the server to listen at port xxxx */
app.listen(2500, ()=> {
    console.log('App listening on port 3000')
});
