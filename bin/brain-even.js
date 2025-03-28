#!/usr/bin/env node

import { welcome, getName, checkAnswer, congratulate } from '../src/cli.js';
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
	welcome();
	const name = getName();
	console.log('Answer "yes" if the number is even, otherwise answer "no".');

	let correctAnswers = 0;
	const roundsToWin = 3;

	while (correctAnswers < roundsToWin) {
		const number = Math.floor(Math.random() * 100);
		console.log(`Question: ${number}`);

		const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
		const correctAnswer = isEven(number) ? 'yes' : 'no';

		if (userAnswer !== correctAnswer) {
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
			console.log(`Let's try again, ${name}!`);
			return;
		}

		console.log('Correct!');
		correctAnswers += 1;
	}

	congratulate(name);
};

playEvenGame(); 