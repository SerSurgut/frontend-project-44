import runGame from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playEvenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(gameDescription, getQuestionAndAnswer);
};

export default playEvenGame;
