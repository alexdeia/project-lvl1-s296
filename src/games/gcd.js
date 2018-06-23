import runGame from '../game-runner';
import getRandomNumber from '../utils';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  return getGcd(num2, num1 % num2);
};

const getData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const rightAnswer = `${getGcd(num1, num2)}`;
  const question = `${num1} ${num2}`;
  return { rightAnswer, question };
};

export default () => runGame(task, getData);
