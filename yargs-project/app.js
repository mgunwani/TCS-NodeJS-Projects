
// execute: node app.js
// Output: [ 'C:\\Program Files\\nodejs\\node.exe', 'E:\\TCS-NodeJS-Projects\\yargs-project\\app.js']
// console.log(process.argv);

// ---------------------------------------------------------------------- //

// execute: node app.js fly
// Output: [ 'C:\\Program Files\\nodejs\\node.exe', 'E:\\TCS-NodeJS-Projects\\yargs-project\\app.js', 'fly']
// console.log(process.argv);

// ---------------------------------------------------------------------- //

// execute: node app.js fly
// output: fly
// console.log(process.argv[2]);

// ---------------------------------------------------------------------- //

// execute: node app.js fly
// output: Flying!!
// let command = process.argv[2];
// if (command == 'fly') {
//     console.log('Flying!!')
// } else if (command == 'drive') {
//     console.log('Driving!!')
// }

// ---------------------------------------------------------------------- //

// execute: node app drive --speed=30 --car=nisaan
console.log(process.argv);
















