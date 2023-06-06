

function treeFunc(dirpath){
    // check if path is given or not
    let destinationPath;
    if(dirpath==undefined){
        treeHelper(process.cwd(),"");
    }else{
        //check if path is correctly defined
        let doesExist =fs.existsSync(dirpath);
        if(doesExist){
            treeHelper(dirpath, "");
        }
        //path given but not correct
        else{
            console.log("Kindly enter the correct path");
        }
    }


}

function treeHelper(dirpath){
    // check if it is file or folder
    let isFile=fs.linkSync(dirpath).isFile();
    if(isFile==true){
        let fileName=path.basename(dirpath);
        console.log(indent+ "   " +fileName)
    }else{
        let dirName=path.basename(dirpath);
        console.log(indent+"    "+dirName);
        let children =fs.readdirSync(dirpath);
        for(let i=0;i<children.length;i++){
            let childPath =path.join(dirpath,children[i]);
            treeHelper(childPath,indent +"\t");
        }
    }
}
module.exports={
    treeKey:treeFunc
}