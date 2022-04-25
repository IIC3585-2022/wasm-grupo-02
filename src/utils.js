/**
 * @param {Array<number>} array
 * @returns {number}
 */
export const sum = (array) => array.reduce((a, b) => a + b, 0);

/**
 * @template T
 * @callback Call
 * @returns {Promise<T> | T}
 */

/**
 * @template T
 * @typedef {Object} TimedCall
 * @property {T} result
 * @property {number} time
 */

/**
 * @template T
 * @param {Call<T>} call
 * @returns {Promise<TimedCall<T>>}
 */
export const measureTime = async (call) => {
  const start = new Date().getTime();
  const result = await call();
  const end = new Date().getTime();
  return {
    result,
    time: end - start,
  };
};
