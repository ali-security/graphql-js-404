import assert from 'assert';

import mainCJS from './dist/main.cjs';

assert.deepStrictEqual(mainCJS.result, {
  data: {
    __proto__: null,
    hello: 'world',
  },
});
console.log('Test script: Got correct result from Webpack bundle!');
