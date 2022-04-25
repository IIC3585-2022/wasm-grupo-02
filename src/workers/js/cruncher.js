import * as javascript from '../../api/javascript';

// eslint-disable-next-line no-restricted-globals
addEventListener('message', async (event) => {
  /** @type {Array<number>} */
  const array = JSON.parse(event.data);
  const result = await javascript.checkEqualSum(array);
  postMessage(JSON.stringify({ result }));
});
