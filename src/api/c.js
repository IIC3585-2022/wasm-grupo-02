import initWasm from '@/../wasm/main.js';

/**
 * @param {Array<number>} array
 * @returns {Promise<bool>}
 */
export const checkEqualSum = async (array) => {
  const { _malloc, HEAPU8, ccall } = await initWasm();

  const arrayLength = array.length;

  const uintAarray = new Uint8Array(array);
  const buffer = _malloc(arrayLength);
  HEAPU8.set(uintAarray, buffer);

  return ccall(
    'checkEqualSum',
    'number',
    ['number', 'number'],
    [buffer, arrayLength],
  ) === 1;
};
