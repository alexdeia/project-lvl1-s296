import { getRandomNumber, runGame } from '../utils';

const getRandomOperation = (num1, num2) => {
  const data = {};
  switch (getRandomNumber(0, 2)) {
    case 0:
      data.result = num1 + num2;
      data.operation = '+';
      break;
    case 1:
      data.result = num1 - num2;
      data.operation = '-';
      break;
    case 2:
      data.result = num1 * num2;
      data.operation = '*';
      break;
    default:
      break;
  }
  return data;
};

const getTask = () => 'What is the result of the expression?';

const getData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const { result: rightAnswer, operation } = getRandomOperation(num1, num2);
  const question = `Question: ${num1} ${operation} ${num2}`;
  return { rightAnswer, question };
};

export default () => runGame(getTask, getData);
