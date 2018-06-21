import runGame from '../game-runner';
import { getRandomNumber } from '../utils';

const task = 'Balance the given number.';

const getBalanceNum = (num) => {
  const arrDigits = String(num).split('').map(digit => +digit);
  while ((Math.max(...arrDigits) - Math.min(...arrDigits)) > 1) {
    const min = Math.min(...arrDigits);
    const max = Math.max(...arrDigits);
    arrDigits[arrDigits.indexOf(min)] += 1;
    arrDigits[arrDigits.indexOf(max)] -= 1;
  }
  return arrDigits.sort().join('');
};

const getData = () => {
  const num = getRandomNumber(10, 5000);
  const rightAnswer = getBalanceNum(num);
  const question = `${num}`;
  return { rightAnswer, question };
};

export default () => runGame(task, getData);
