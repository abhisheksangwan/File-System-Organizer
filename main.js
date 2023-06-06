#!/usr/bin/env node

let fs = require("fs");
let path = require("path");

let helpObj=require("./commands/help");
let treeObj = require("./commands/tree");
let OrganiseObj =require("./commands/organise");
let typesObj =require("./utility");

// gets input from cmd and gives an array
let inputArr = process.argv.slice(2);
console.log(inputArr);

//category-types defined

let types = {
    media:["mp4", "mkv"],
    archives:["zip","7z", "rar", "tar","gz", "ar", "iso", "xz"],
    documents:['docx','doc', 'pdf', 'xls', 'odt', 'ods', 'odp', 'odg', 'txt', 'ps', 'tex', 'xlsx', 'REZI'],
    app:['exe','dmg', 'pkg', 'deb','msi'],
    images:['png', 'svg', 'jpg', 'jpeg'],
    Psd:['psd', 'ai'],
    fonts:['ttf']
}

//commands ->
//1. node main.js tree "direcoryPath" -> 0th index pe command & 1st index pe path(agar hoga to)
//2. node main.js organise "directoryPath" ->
//3. node main.js help

// switch-case

let command =inputArr[0];
switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organise":
        OrganiseObj.organiseKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("👻PleaseInput Right Command");
        break;
}


