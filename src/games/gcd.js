import runGame from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGCD(num1, num2));
  return { question, correctAnswer };
};

const playGCDGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  runGame(gameDescription, getQuestionAndAnswer);
};

export default playGCDGame;
