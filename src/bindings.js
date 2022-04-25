import { runJSAsyncCruncher } from './workers/js/initializer';
import { runCAsyncCruncher } from './workers/c/initializer';
import { measureTime } from './utils';
import {
  openModal,
  getInputNumbers,
  setLangContent,
  setResultContent,
  addStartButtonListeners,
  addCloseButtonListeners,
} from './dom';

const startExecution = async () => {
  openModal();

  await new Promise((resolve) => { setTimeout(() => resolve(), 10); });

  const array = getInputNumbers();

  const cPromise = measureTime(() => runCAsyncCruncher(array));
  const jsPromise = measureTime(() => runJSAsyncCruncher(array));

  cPromise.then(({ time }) => setLangContent('c', `Finalizado en ${time} milisegundos...`));
  jsPromise.then(({ time }) => setLangContent('js', `Finalizado en ${time} milisegundos...`));

  const [jsResponse] = await Promise.all([jsPromise, cPromise]);

  const finalResult = (
    jsResponse.result
      ? `El resultado es el siguiente: ${JSON.stringify(jsResponse.result)}`
      : 'No se encontró un resultado satisfactorio'
  );

  setResultContent(finalResult);
};

export const addListeners = () => {
  addStartButtonListeners(startExecution);
  addCloseButtonListeners(() => { window.location.href = '/'; });
};
