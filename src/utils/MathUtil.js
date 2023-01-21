export const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getSumOfRandomNumbersInArray = (array, count) => {
  if (count > array.length) return -1;

  const shuffled = [...array];
  shuffled.sort(() => 0.4 - Math.random());
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += shuffled[i];
  }
  return sum;
};
