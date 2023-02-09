const { generateUsername } = require("unique-username-generator");

const messages = [
  "LOL THIS IS CRAZY!!!",
  "AAAA omg!!!",
  "omg!!! LUL",
  "aaaaaaaaaaaaaaaaaaa LUL aaaaaaaaaaaaa",
  "real men use Rust bro",
  "POGGERRRSSSS",
  "i WANT sOME tACCOOS",
  "everyone make sure to stay hydrated",
  "I am the CEO of HTML!!!",
  "OMEGALUL",
  "Thank you for following!",
  "Has Bill Gates heard about TypeScript?",
  "pizza is so much better then tacos duuuude",
];

const getCurrentTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${hour}:${minute}:${second}`;
};

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const generateRandomHexColor = () => {
  const COLOR_CODE_LENGTH = 6;
  const characters = "0123456789ABCDEF";
  const symbol = "#";
  let colorCode = "";
  for (let i = 0; i < COLOR_CODE_LENGTH; i++) {
    colorCode += characters[Math.floor(Math.random() * characters.length)];
  }
  return symbol + colorCode;
};

const createMessage = () => {
  return {
    time: getCurrentTime(),
    username: generateUsername(),
    body: getRandomMessage(),
    color: generateRandomHexColor(),
  };
};

module.exports = { createMessage };
