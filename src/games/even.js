import readlineSync from 'readline-sync';
import { getRandomNumber, isEven } from '../common-function';

const playGame = (playerName) => {
  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return count;
    }

    const question = getRandomNumber();
    console.log('Question: ', question);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(question) ? 'yes' : 'no';

    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return iter(count);
    }
    console.log('Correct!');
    return iter(count - 1);
  };
  return iter(3);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".', '\n');

  const playerName = readlineSync.question('May I have your name? ');

  playGame(playerName);
};
