const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = [];
  let i = 0;
  let phrase = '';
  
  while (i < expr.length) {
      arr.push(expr.slice(i, i+10));
      i = i + 10;
  }

  arr.forEach(item => {
    i = 0;
    let letter = '';
    while (i < 10) {
      let couple = item.slice(i, i+2);
      if (couple === '10') {
        letter += '.';
      } else if (couple === '11') {
        letter += '-';
      }
      i = i + 2;
    }
    if (MORSE_TABLE[letter]) {
      phrase += MORSE_TABLE[letter];
    } else {
      phrase += ' ';
    }
  })
  return phrase;
}

module.exports = {
    decode
}