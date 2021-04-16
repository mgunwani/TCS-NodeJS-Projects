
const yargs = require('yargs')

// execute: node app drive --speed=30 --car=nisaan
/* output: [
  'C:\\Program Files\\nodejs\\node.exe',
  'E:\\TCS-NodeJS-Projects\\yargs-project\\app1',
  'drive',
  '--speed=30',
  '--car=nisaan'
] */
// console.log(process.argv);
// console.log("-----------------------------");

// ---------------------------------------------------------------------- //

// execute: node app drive --speed=30 --car=nisaan
// output: { _: [ 'drive' ], speed: 30, car: 'nisaan', '$0': 'app1' }
// console.log(yargs.argv);

// ---------------------------------------------------------------------- //

// execute: node app1.js fly
// output: Flying!!
// let command = yargs.argv._[0]
// if (command == 'fly') {
//     console.log('Flying!!')
// } else if (command == 'drive') {
//     console.log('Driving!!')
// }

// ---------------------------------------------------------------------- //

// execute: node app1 fly --speed=30 --car=nissan
// execute: node app1 drive --speed=30 --car=nissan
// execute: node app1 drive
let command = yargs.argv._[0]
let params = yargs.argv;
if (command == 'fly') {
    console.log('Flying!!')
} else if (command == 'drive') {
    if (params.speed && params.car) {
        console.log(`driving ${params.car} at the speed of ${params.speed}`)
        // console.log('driving ' + params.car + ' at the speed of ' + params.speed);
    } else {
        console.log('driving')
    }
}











