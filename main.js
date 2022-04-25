import * as c from '@/api/c';
import * as javascript from '@/api/javascript';

const main = async () => {
  const array = [4, 3, 5, 2, 7];

  const cResult = await c.checkEqualSum(array);
  const javascriptResult = javascript.checkEqualSum(array);

  console.log(cResult);
  console.log(javascriptResult);
};

main();
