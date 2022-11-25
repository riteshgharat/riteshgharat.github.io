/*
  # Math.js 1.0.0-05/11/2022
  * New way to do Arithmetic Operation directly into "HTML" Doc
  * Author: Ritesh Gharat https://github.com/riteshgharat
*/

window.onload = function() {
  setInterval(math, 1); // repeat function every 1ms
}

const mathMethod = ['abs[(]', 'acos[(]', 'acosh[(]', 'asin[(]', 'asinh[(]', 'atan[(]', 'atan2[(]', 'atanh[(]', 'cbrt[(]', 'ceil[(]', 'cos[(]', 'cosh[(]', 'exp[(]', 'floor[(]', 'log[(]', 'max[(]', 'min[(]', 'pow[(]', 'random[(]', 'round[(]', 'sign[(]', 'sin[(]', 'sinh[(]', 'sqrt[(]', 'tan[(]', 'tanh[(]', 'trunc[(]', 'E', 'PI', 'SQRT2', 'SQRT1_2', 'LOG2E', 'LOG10E', 'LN2', 'LN10'];

//function to evaluate when any math method
function evaluate(value) {
  let a;
  "use strict";
  a = eval?.(`with(Math) (${value});`);
  return a;
}
console.info('math.html 1.0.0 https://riteshgharat.github.io/math-html');

function math() {
  document.querySelectorAll('math, .math, #math').forEach(mTag => {
    let mTagValue = mTag.innerHTML.split(' '); //getting innerHtml and spliting it
    if (mTagValue[1] == '') {
      // when using math tag
      for (var i = 3; i < (mTagValue.length - 2); i++) {
        // run when math methods
        for (var j = 0; j < mathMethod.length; j++) {
          if (mTagValue[i].toString().search(mathMethod[j]) != -1) mTagValue[i] = evaluate(mTagValue[i]);
        }
      }
      // run when no math methods
      for (var i = 3; i < mTagValue.length - 2; i++) {
        mTagValue[i] = eval(mTagValue[i]);
      }
    } else {
      // when using .math && #math
      for (var i = 0; i < mTagValue.length; i++) {
        // run when math methods
        for (var j = 0; j < mathMethod.length; j++) {
          if (mTagValue[i].toString().search(mathMethod[j]) != -1) mTagValue[i] = evaluate(mTagValue[i]);
        }
      }
      // run when no math methods
      for (var i = 0; i < mTagValue.length; i++) {
        mTagValue[i] = eval(mTagValue[i]);
      }
    }
    mTag.innerHTML = mTagValue.toString().replace(/,/g, ' ');;
  });
}