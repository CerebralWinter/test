const request = require('request');

const url = 'https://jsonplaceholder.typicode.com/posts/1';

request(url, { json: true }, (err, res, body) => {
  if (err) throw err;

  console.log(body);
});