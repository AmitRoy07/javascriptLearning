'use strict';

const runOnce = function () {
  console.log(`This will never run twice`);
};
runOnce();

(function () {
  console.log(`This will never run`);
})();

(() => console.log(`This will never run`))();
