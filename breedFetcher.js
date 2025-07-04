//const fs = require('fs');
const cmdInput = process.argv.slice(2);

const needle = require('needle');
needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${cmdInput[0]}`, (error, response, body) => {
  //console.log(error);
  if (error) {
    throw new Error("Something went wrong with your request", error);
  }
  console.log(response.statusCode);
  //console.log(response, response.statusCode);
  console.log(body[0].description);
});