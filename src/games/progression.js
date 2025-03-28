import runGame from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
	const progression = [];
	for (let i = 0; i < length; i += 1) {
		progression.push(start + step * i);
	}
	return progression;
};

const getQuestionAndAnswer = () => {
	const start = getRandomNumber(1, 50);
	const step = getRandomNumber(2, 10);
	const length = getRandomNumber(5, 10);
	const hiddenIndex = getRandomNumber(0, length - 1);

	const progression = generateProgression(start, step, length);
	const correctAnswer = String(progression[hiddenIndex]);
	progression[hiddenIndex] = '..';

	const question = progression.join(' ');
	return { question, correctAnswer };
};

const playProgressionGame = () => {
	const gameDescription = 'What number is missing in the progression?';
	runGame(gameDescription, getQuestionAndAnswer);
};

export default playProgressionGame; 