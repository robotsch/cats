const fs = require('fs');

const breedDetailsFromFile = function(breed, cb) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) cb(data);
    if (error) cb(undefined)
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) 
};

module.exports = breedDetailsFromFile