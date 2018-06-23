import readlineSync from 'readline-sync';

const greeting = (task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task, '\n');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`, '\n');
  return playerName;
};

export default (task, getGameData, attempts = 3) => {
  const playerName = greeting(task);
  const iter = (counter) => {
    if (counter === 0) {
      return;
    }
    const { rightAnswer, question } = getGameData();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === rightAnswer) {
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
