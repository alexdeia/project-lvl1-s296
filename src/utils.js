import readlineSync from 'readline-sync';

export const getRandomNumber = (min = 0, max = 100) =>
  Math.floor(Math.random() * (((max - min) + 1) + min));

export const isEven = num => num % 2 === 0;

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
      return;
    }
    const { rightAnswer, question } = getGameData();
    console.log(question);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === String(rightAnswer)) {
      console.log('Correct!');
      iter(counter - 1);
      return;
    }
    console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    iter(counter);
  };
  iter(attempts);
  console.log(`Congratulations, ${playerName}!`);
};
