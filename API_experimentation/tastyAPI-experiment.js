/** @format */
const express = require('express');

const axios = require('axios');

const http = require('http');

const app = express();
const postHTML = `<html><head><title>Post Example</title></head><body>
  <form method='post'>
  <label for="search">Find a meal: </label>
  <input type="text" name="search" id="search">
  </form></body></html>`;

const port = process.env.PORT || 5001;

const getTastyTest = (param) => {
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
    params: { prefix: param },
    headers: {
      'X-RapidAPI-Key': 'd7f9e717b8mshfb7ea772dbb24dep1c16c5jsnb59b9478cd9e',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
//getTastyTest('soup');

let tastyData = [];
const getTasty = (param) => {
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
    params: { prefix: param },
    headers: {
      'X-RapidAPI-Key': 'd7f9e717b8mshfb7ea772dbb24dep1c16c5jsnb59b9478cd9e',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Tasty API Experiment</h1>`);
  res.write(`<label for="search">Find a meal: </label>
    <input type="text" name="search" id="search" on keyup>`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
