import readlineSync from 'readline-sync';

export const getRandomNumber = (min = 0, max = 100) =>
  Math.floor(Math.random() * (((max - min) + 1) + min));

export const isEven = num => num % 2 === 0;

export const getRandomOperation = (num1, num2) => {
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

export const greeting = (task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task, '\n');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`, '\n');
  return playerName;
};

export const runGame = (task, getGameData) => {
  const playerName = greeting(task());
  const attempts = 3;

  const iter = (counter) => {
    if (counter === 0) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const { rightAnswer, question } = getGameData();
    console.log(question);
    const playerAnswer = +readlineSync.question('Your answer: ');

    if (playerAnswer === rightAnswer) {
      console.log('Correct!');
      return iter(counter - 1);
    }
    console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    return iter(counter);
  };
  return iter(attempts);
};
