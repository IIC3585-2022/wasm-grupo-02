import * as c from '../../api/c';

// eslint-disable-next-line no-restricted-globals
addEventListener('message', async (event) => {
  /** @type {Array<number>} */
  const array = JSON.parse(event.data);
  const result = await c.checkEqualSum(array);
  postMessage(JSON.stringify({ result }));
});
