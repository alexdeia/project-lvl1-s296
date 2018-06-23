import runGame from '../game-runner';
import getRandomNumber from '../utils';

const generateProgression = (start, step, progressionLength = 10) => {
  const iter = (num, acc) => {
    if (acc.length >= progressionLength) {
      return acc;
    }
    return iter(num + step, [...acc, num + step]);
  };
  const progression = iter(start, [start]).join(' ');
  const arrProgression = progression.split(' ');
  const randomIndex = getRandomNumber(0, arrProgression.length - 1);
  const rightAnswer = arrProgression[randomIndex];
  arrProgression[randomIndex] = '..';
  return { progression: arrProgression.join(' '), rightAnswer };
};

const task = 'What number is missing in this progression?';

const progressionLength = 10;

const getData = () => {
  const start = getRandomNumber(0, 50);
  const step = getRandomNumber(1, 20);
  const { progression, rightAnswer } = generateProgression(start, step, progressionLength);
  return { question: progression, rightAnswer };
};

export default () => runGame(task, getData);
