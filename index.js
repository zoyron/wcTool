const fs = require('fs');

let args = process.argv[2];
let fileName = process.argv[3];

if (args == '-c') {
  console.log(byteCount(), ' ', fileName);
}

else if (args == '-l') {
  console.log(lineCount(), ' ', fileName);
}

else if (args == '-w') {
  console.log(wordCount(), ' ', fileName);
}

else if (args == '-m') {
  console.log(charCount(), ' ', fileName);
}

// handling the case where no option input is given
else if (process.argv.length == 3) {
  fileName = process.argv[2];
  console.log(lineCount(), ' ', wordCount(), ' ', byteCount(), ' ', fileName);
}

else {
  console.log('Invalid Option');
}

// function implementations

/**
 * This function returns the number of bytes consisting the given file.
 */
function byteCount() {
  try {
    let buffer = fs.readFileSync(fileName); // open file as binary sequence
    return buffer.length;
  } catch (e) {
    console.log(e.message);
  }
}

/**
 * This function returns the number of lines in a given text.
 */
function lineCount() {
  try {
    let data = fs.readFileSync(fileName, 'utf-8');
    return data.split(/\r\n|\r|\n/).length;
  } catch (e) {
    console.log(e.message);
  }
}

/**
 * This function returns the number of words in the given text.
 */
function wordCount() {
  try {
    let data = fs.readFileSync(fileName, 'utf-8');
    return data.split(/\S+/g).length;
  } catch (e) {
    console.log(e.message);
  }
}

/**
 * This function returns the number of characters in a given text.
 */
function charCount() {
  try {
    let data = fs.readFileSync(fileName, 'utf-8');
    return data.length;
  } catch (e) {
    console.log(e.message);
  }
}
