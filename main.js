import * as c from './src/api/c';
import * as javascript from './src/api/javascript';
import { measureTime } from './src/utils';

const main = async () => {
  const array = [4, 3, 5, 2, 7];

  const cResult = await measureTime(async () => c.checkEqualSum(array));
  const javascriptResult = await measureTime(() => javascript.checkEqualSum(array));

  console.log(cResult);
  console.log(javascriptResult);
};

main();
