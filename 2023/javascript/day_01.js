const fs = require('fs');
// import md document of data
const markdown = fs.readFileSync('./data/day_01_input.md', 'utf8');
// seperate each line into an array of strings
const lines = markdown.split('\n');
// console.log(lines);


