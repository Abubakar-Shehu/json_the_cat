const needle = require('needle');

const fetchBreedDescription = (breed, callback) => {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response) => {
    callback(error, response.body[0].description);
  });
};


module.exports = fetchBreedDescription;

// //const fs = require('fs');
// const needle = require('needle');
// //const cmdInput = process.argv.slice(2);

// // needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${cmdInput[0]}`, (error, response, body) => {
// //   //console.log(error);
// //   if (error) {
// //     throw new Error("Something went wrong with your request", error);
// //   }
// //   console.log(response.statusCode);
// //   //console.log(response, response.statusCode);
// //   console.log(body[0].description);
// // });

// const fetchBreedDescription = (breed, callback) => {
//   needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response) => {
//     // if (error) {
//     //   throw new Error("Something went wrong with your request", error);
//     // }

//     callback(error, response.body[0].description);


//     //console.log(response.statusCode);

//     //console.log(response, response.statusCode);
//     //callback(body[0].description);
//   });
// };

// // const fetchBreedDescription ('Siberian', (error, description) => {

// // });

// module.exports = fetchBreedDescription;