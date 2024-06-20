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
  lineCount();
  wordCount();
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
