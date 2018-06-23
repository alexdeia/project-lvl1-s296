import runGame from '../game-runner';
import getRandomNumber from '../utils';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (acc) => {
    if (acc >= num / 2) {
      return true;
    }
    if (num % acc === 0) {
      return false;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

const task = 'Is this number prime?';

const getData = () => {
  const question = getRandomNumber(1, 300);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default () => runGame(task, getData);
