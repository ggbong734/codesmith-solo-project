const express = require('express');
const app = express();
const path = require('path');

// uncomment the below for proxy challenge

// app.get('/', (req, res) => {
//     return res.status(200).json('howdy');
// });

if (process.env.NODE_ENV === 'production') {
    // statically serve everything in the build folder on the route '/build'
    app.use('/build', express.static(path.join(__dirname, '../build')));
    // serve index.html on the route '/'
    app.get('/', (req, res) => {
        return res.status(200).sendFile(path.join(__dirname, '../src/temp.html'));
    });
}

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
