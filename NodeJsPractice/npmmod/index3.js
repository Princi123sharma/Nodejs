
const chalk =require('chalk');
console.log(chalk.blue("hello world"));
const validate=require('validator');
const res=validate.isEmail("cloudprinci12@gmail.com");
console.log(res? chalk.green.inverse(res) : chalk.red.inverse(res));