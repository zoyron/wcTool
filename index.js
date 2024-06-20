#!/usr/bin/env node

const fs = require('fs');

let args = process.argv[2];

if(args == '-c'){
  byteCount(); // this function returns the byte count of the file
}

else if(args == '-l'){
  lineCount(); // returns the number of lines in a file
}

else if(args == '-w'){
  wordCount(); // returns the number of words in the input text
}

else if(args == '-m'){
  charCount(); // return the total number of characters in the input text
}

// handling the case where no input is given
else if(process.argv.length == 2){
  byteCount();
  wordCount();
  lineCount();
}

// corner case for all the invalid options
else{
  console.log('Invalid Option');
}

// function implementations

/**
 * This function prints the number of bytes consisting the given file.
 */
function byteCount(){
  try{
    let buffer = fs.readFileSync('test.txt'); // open file as binary sequence
    console.log(buffer.length);
  } catch(e){
    console.log(e.message);
  }
}

/**
 * This function returns the number of lines in a given text.
 */
function lineCount(){
  try{
    let data = fs.readFileSync('test.txt', 'utf-8');
    // splitting the string into an array of subtrings based on the pattern passed as the parameter, '\n' in this case, and returning that array
    console.log(data.split(/\r\n|\r|\n/).length); 
  } catch(e){
    console.log(e.message);
  }
}

/**
 * This function prints the number of words in the given text.
 */
function wordCount(){
  try{
    let data = fs.readFileSync('test.txt', 'utf-8');
    console.log(data.split(/\S+/g).length);
  } catch(e){
    console.log(e.message);
  }
}

/**
 * This function prints the number of characters in a given text.
 */
function charCount(){
  try{
    let data = fs.readFileSync('test.txt', 'utf-8');
    console.log(data.length);
  } catch(e){
    console.log(e.message);
  }
}
