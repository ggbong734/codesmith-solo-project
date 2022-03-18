const express = require('express');
const app = express();
const path = require('path');
const foodRouter = require('./routes/intake');
const settingRouter = require('./routes/setting');

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../dist')));

if (process.env.NODE_ENV === 'production') {
    // statically serve everything in the build folder on the route '/build'
    app.use('/build', express.static(path.join(__dirname, '../dist')));
    // serve index.html on the route '/'
    app.get('/', (req, res) => {
        return res.status(200).sendFile(path.join(__dirname, '../src/temp.html'));
    });
}

/**
 * define route handlers
 */
app.use('/intake', foodRouter);
app.use('/setting', settingRouter);


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

/**
 * express error handler
 *  */

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
