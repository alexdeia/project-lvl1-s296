import runGame from '../game-runner';
import getRandomNumber from '../utils';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomNumber(0, 2)];
};

const calculate = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};

const task = 'What is the result of the expression?';

const getData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const randomOperation = getRandomOperation();
  const question = `${num1} ${randomOperation} ${num2}`;
  const rightAnswer = `${calculate[randomOperation](num1, num2)}`;
  return { question, rightAnswer };
};

export default () => runGame(task, getData);
