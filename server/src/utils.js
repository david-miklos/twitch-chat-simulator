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

const colors = [
  "Blue",
  "Coral",
  "DodgerBlue",
  "SpringGreen",
  "YellowGreen",
  "Green",
  "OrangeRed",
  "Red",
  "GoldenRod",
  "HotPink",
  "CadetBlue",
  "SeaGreen",
  "Chocolate",
  "BlueViolet",
  "Firebrick",
];

const getCurrentTime = () => {
  const date = new Date();
  const hour = addLeadingZeros(date.getHours());
  const minute = addLeadingZeros(date.getMinutes());
  const second = addLeadingZeros(date.getSeconds());

  return `${hour}:${minute}:${second}`;
};

const addLeadingZeros = (num) => {
  return num < 10 ? "0" + num : num;
};

const getRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const createMessage = () => {
  return {
    time: getCurrentTime(),
    username: generateUsername(),
    body: getRandom(messages),
    color: getRandom(colors),
  };
};

module.exports = { createMessage };
