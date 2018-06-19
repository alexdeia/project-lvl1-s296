export const getRandomNumber = () => {
  const min = 0;
  const max = 100;

  return Math.floor(Math.random() * (((max - min) + 1) + min));
};

export const isEven = num => num % 2 === 0;
