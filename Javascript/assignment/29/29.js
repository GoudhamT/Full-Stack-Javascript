// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

import promptSync from 'prompt-sync';
const prompt = promptSync();

let fileName = prompt("Enter complete file path: ")

function getExt(fname)
{
    let file_arr = fname.split('.')
    return file_arr[file_arr.length-1]
}
if(fileName.includes('.'))
{
    console.log("Type of file given is",getExt(fileName))
}
else{
    console.log("No extension given for this file")
}