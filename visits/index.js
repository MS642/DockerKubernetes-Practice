const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient( {
    host: 'redis-server', // could have host: http://www...
    port: 6379 // this is the default port used by redis server
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits)=> {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);

    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});