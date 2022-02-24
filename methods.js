var express = require('express');
var app = express();
const fs =require('fs');
const members = require('./members');


const getmembers = ()=>{
    return json(members)
}
 



module.exports = getmembers ;