import readlineSync from 'readline-sync';
import { welcome, getName, congratulate } from './cli.js';

const ROUNDS_COUNT = 3;

const runGame = (gameDescription, getQuestionAndAnswer) => {
	welcome();
	const name = getName();
	console.log(gameDescription);

	for (let i = 0; i < ROUNDS_COUNT; i += 1) {
		const { question, correctAnswer } = getQuestionAndAnswer();
		console.log(`Question: ${question}`);

		const userAnswer = readlineSync.question('Your answer: ');

		if (userAnswer !== correctAnswer) {
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
			console.log(`Let's try again, ${name}!`);
			return;
		}

		console.log('Correct!');
	}

	congratulate(name);
};

export default runGame; 