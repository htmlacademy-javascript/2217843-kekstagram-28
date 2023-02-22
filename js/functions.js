const checkStringLength = (string, limit) => String(string).length <= limit;

checkStringLength('hello', 6);


const isPalindrome = (string) => {
  string = String(string).toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

isPalindrome('А роза упала на лапу Азора');


const extractNumber = (string) => {
  string = String(string).replace(/\D/g, '');
  return parseInt(string, 10);
};

extractNumber(1.5);


const createNewString = (string, minLength, pad) => {
  while (string.length < minLength) {
    string = pad.slice(0, minLength - string.length) + string;
  }
  return string;
};

createNewString('qwerty', 4, '0');
