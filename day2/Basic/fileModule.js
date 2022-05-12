const fs= require('fs');

fs.readFile('file.txt', 'utf8', (err, data)=>{
    console.log(err, data);
})
console.log('finish reading file.'); //this will print first because read file is a callback finction.

//This is  written file. so when you pass data, it will automatic generate file
fs.writeFile('file2.txt', 'This is 2nd data', ()=>{
    console.log('written to the file.');
})


//read file sync
const syncFile= fs.readFileSync('file.txt')
console.log(syncFile); //it will buffer here so if you want in text them you have to sent in tostring.
console.log(syncFile.toString());

const writedata= fs.writeFileSync('file2.html', 'This is 2nd data');
console.log(writedata);
