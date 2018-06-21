export const getRandomNumber = (min = 0, max = 100) =>
  Math.floor(Math.random() * (((max - min) + 1) + min));

export const isEven = num => num % 2 === 0;
