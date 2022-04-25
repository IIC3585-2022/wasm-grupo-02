import { sum } from '../utils';

/**
 * @param {Array<number>} array
 * @param {Array<number>} sub1
 * @param {Array<number>} sub2
 * @param {Array<number>} sub3
 * @param {number} currentIndex
 * @returns {[Array<number>, Array<number>, Array<number>] | false}
 */
const checkEqualSumBackend = (array, sub1, sub2, sub3, currentIndex) => {
  if (currentIndex === array.length) {
    if ((sum(sub1) === sum(sub2)) && (sum(sub2) === sum(sub3))) {
      return [sub1, sub2, sub3];
    }
    return false;
  }
  const addedToFirst = checkEqualSumBackend(
    array,
    sub1.concat(array[currentIndex]),
    sub2,
    sub3,
    currentIndex + 1,
  );

  const addedToSecond = checkEqualSumBackend(
    array,
    sub1,
    sub2.concat(array[currentIndex]),
    sub3,
    currentIndex + 1,
  );

  const addedToThird = checkEqualSumBackend(
    array,
    sub1,
    sub2,
    sub3.concat(array[currentIndex]),
    currentIndex + 1,
  );

  return addedToFirst || addedToSecond || addedToThird;
};

/**
 *
 * @param {Array<number>} array
 * @returns {[Array<number>, Array<number>, Array<number>] | false}
 */
export const checkEqualSum = (array) => checkEqualSumBackend(array, [], [], [], 0);
