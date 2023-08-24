


const fs = require("fs");
const path = require("path");
let types = {
  media: ["mp4", "mkv"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "txt",
    "ps",
    "tex",
    "xlsx",
    "REZI",
  ],
  app: ["exe", "dmg", "pkg", "deb", "msi"],
  images: ["png", "svg", "jpg", "jpeg"],
  Psd: ["psd", "ai"],
  fonts: ["ttf"],
};
// 1. input -> directory path given
// 2. create-> organised_files -> directory
function OrganiseFunc(dirpath){
    // check if path is given or not
    let destinationPath;
    if(dirpath==undefined){
        // console.log("Kindly enter the path ");
        destinationPath=process.cwd();
    }else{
        //check if path is correctly defined
        let doesExist =fs.existsSync(dirpath);
        if(doesExist){
            //path exists correctly , now organise
            //point 2 -> from top i.e create-> organised_files -> directory
            destinationPath = path.join(dirpath, "organised_files");
            //abhi bas path bana h 
            //check agar pehle se organised_files naam se directory bani hui h to dobara nahi banayege nhi to error aayega like-> throw_err
            if(fs.existsSync(destinationPath)==false){
                fs.mkdirSync(destinationPath);
                //upar vale path pe directory ban gyi            
            }
        }
        //path given but not correct
        else{
            console.log("Kindly enter the correct path");
        }
    }
    organiseHelper(dirpath,destinationPath);
        
        // 4. copy/cut files to that organised directory inside of any of category folder

}
function organiseHelper(src,dest){
    // 3. check all files extension (mp4,rar....)->
    let childNames=fs.readdirSync(src);
    // console.log(childName); -. gives only name of all files and folders in specified directory whose path is passed but we need path of these files/folders to organise them

    //traverse each file/folder
    for(let i=0;i<childNames.length;i++){
        let childAddress=path.join(src,childNames[i]);
        let isFile=fs.lstatSync(childAddress).isFile();
        if(isFile){
            // console.log(childNames[i]);
            let category =getCategory(childNames[i]);
            console.log(childNames[i], "belongs to -->", category);
            // 4. copy/cut files to that organised directory inside of any of category folder
            sendFiles(childAddress, dest, category);
        }
    }

}
function getCategory(name){
    let ext =path.extname(name);
    // console.log(ext);
    ext = ext.slice(1);
    for(let type in types){
        let currentTypeArray=types[type];
        for(let i=0;i<currentTypeArray.length;i++){
            if(ext==currentTypeArray[i]){
                return type;
            }
        }
    }
    return "other";
}
function sendFiles(srcFilePath,dest,category){
    //
    let categoryPath =path.join(dest,category);
    //abhi bas path bana h 
    //check agar pehle se vo media_files naam se directory bani hui h to dobara nahi banayege nhi to error aayega like-> throw_err
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let fileName=path.basename(srcFilePath);
    let destFilePath =path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    fs.unlinkSync(srcFilePath);

}
module.exports={
    organiseKey:OrganiseFunc
}