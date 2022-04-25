/**
 * @param {string} id
 * @param {string} content
 */
const setContainerContent = (id, content) => {
  const $container = document.getElementById(id);
  $container.innerText = content;
};

export const openModal = () => {
  const $modal = document.getElementById('modal');
  $modal.style.visibility = 'visible';
};

export const closeModal = () => {
  const $modal = document.getElementById('modal');
  $modal.style.visibility = 'hidden';
};

/**
 * @param {'js' | 'c'} lang
 * @param {string} content
 */
export const setLangContent = (lang, content) => {
  setContainerContent(`lang-${lang}`, content);
};

/**
 * @param {string} content
 */
export const setResultContent = (content) => {
  setContainerContent('result', content);
};

/**
 * @returns {Array<number>}
 */
export const getInputNumbers = () => {
  /** @type {HTMLInputElement} */
  const $input = document.getElementById('input');
  return $input.value.replace(' ', '').split(',').map((x) => Number(x));
};

/**
 * @callback Callback
 * @returns {void}
 */

/**
 *
 * @param {Callback} callback
 */
export const addStartButtonListeners = (callback) => {
  /** @type {HTMLButtonElement} */
  const $button = document.getElementById('button');
  $button.addEventListener('click', callback);
};

/**
 *
 * @param {Callback} callback
 */
export const addCloseButtonListeners = (callback) => {
  /** @type {HTMLButtonElement} */
  const $closeButton = document.getElementById('close');
  $closeButton.addEventListener('click', callback);
};
