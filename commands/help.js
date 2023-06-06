
function helpFunc(){
    console.log(`
    List of All the commands:
    1. node main.js tree "direcoryPath"
    2. node main.js organise "directoryPath"
    3. node main.js help
    `);
}
module.exports={
    helpKey:helpFunc
}