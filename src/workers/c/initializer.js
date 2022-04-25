import CruncherWorker from './cruncher?worker'; // eslint-disable-line import/no-unresolved

/**
 * @param {Array<number>} array
 * @returns {Promise<[Array<number>, Array<number>, Array<number>] | false>}
 */
export const runCAsyncCruncher = (array) => new Promise((resolve) => {
  const worker = new CruncherWorker();
  worker.postMessage(JSON.stringify(array));
  worker.addEventListener('message', (result) => {
    resolve(JSON.parse(result.data).result);
  });
});
