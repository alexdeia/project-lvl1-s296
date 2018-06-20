import { getRandomNumber, runGame } from '../common-function';

const getTask = () => 'Balance the given number.';

const getBalanceNum = (num) => {
  const sNum = String(num);
  const arrDigits = sNum.split('').map(digit => +digit);

  const balancer = (digits) => {
    const acc = digits;
    const min = Math.min(...acc);
    const max = Math.max(...acc);
    if ((max - min) < 2) {
      return acc.sort();
    }

    acc[acc.indexOf(min)] += 1;
    acc[acc.indexOf(max)] -= 1;
    return balancer(acc);
  };
  return +balancer(arrDigits).join('');
};

const getData = () => {
  const num = getRandomNumber(10, 5000);
  const rightAnswer = getBalanceNum(num);
  const question = `Question: ${num}`;
  return { rightAnswer, question };
};

export default () => runGame(getTask, getData);
