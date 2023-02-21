// Проверка длины строки

const checkLimit = (string, limit) => {
  if (string.length <= limit) {
    return true;
  }
  return false;
};

checkLimit ('hello', 6);

// Проверка на палиндром

const isPalindrome = (phrase) => {
  const array = phrase.split('');
  const filteredArray = array.filter((value) => value !== ' ');
  const string = filteredArray.join('').toLowerCase();
  const reversedArray = filteredArray.reverse();
  const newString = reversedArray.join('').toLowerCase();

  if(string === newString) {
    return true;
  } else {
    return false;
  }
};

isPalindrome('А роза упала на лапу Азора');

// Извлечь цифры из строки, вернуть целое положительное число

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return Math.abs(string);
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumber(-10);

// Дополнить строку
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadStart('qwerty', 4, '0');
