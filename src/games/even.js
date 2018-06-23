import runGame from '../game-runner';
import getRandomNumber from '../utils';

export const isEven = num => num % 2 === 0;

const task = 'Answer "yes" if number even otherwise answer "no".';

const getData = () => {
  const randomNumber = getRandomNumber();
  const question = `${randomNumber}`;
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return { rightAnswer, question };
};

export default () => runGame(task, getData);
