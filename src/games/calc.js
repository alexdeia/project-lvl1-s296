import { getRandomNumber, getRandomOperation, runGame } from '../common-function';

const getTask = () => 'What is the result of the expression?';

const getData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const { result: rightAnswer, operation } = getRandomOperation(num1, num2);
  const question = `Question: ${num1} ${operation} ${num2}`;
  return { rightAnswer, question };
};

export default () => runGame(getTask, getData);
