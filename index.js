const fetch = require('node-fetch');

const url = process.env.URL || 'http://localhost:3000/signal';

setInterval(() => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({ signal: Math.random() * 1000 }),
    })
        .then(response => response.json())
        .then(answer => {
            console.log('Answer recieved!');
            console.log(answer);
        })
        .catch(error => console.log(error));
}, 3000);
