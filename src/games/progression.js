import runGame from '../game-runner';
import { getRandomNumber } from '../utils';

const generateProgression = (start, step, progressionLength = 10) => {
  const iter = (num, acc) => {
    if (acc.length >= progressionLength) {
      return acc;
    }
    return iter(num + step, [...acc, num + step]);
  };
  return iter(start, [start]).join(' ');
};

const hideNumber = (progression) => {
  const arrProgression = progression.split(' ');
  const randomIndex = getRandomNumber(0, arrProgression.length - 1);
  const rightAnswer = arrProgression[randomIndex];
  arrProgression[randomIndex] = '..';
  return { sProgression: arrProgression.join(' '), rightAnswer };
};

const task = 'What number is missing in this progression?';

const getData = () => {
  const start = getRandomNumber(0, 50);
  const step = getRandomNumber(1, 20);
  const progression = generateProgression(start, step);
  const { sProgression, rightAnswer } = hideNumber(progression);
  return { question: sProgression, rightAnswer };
};

export default () => runGame(task, getData);
