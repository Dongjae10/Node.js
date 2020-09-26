// 모듈 사용
var calc = {};
calc.add = function (a,b){
    return a+b;
}

console.log('모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d', calc.add(10,10));

var calc1 = require('./calc'); //exports객체에서 모듈파일을 불러드린다, require을 이용해 calc.js의 경로를 찾아 불러드린다.
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc1.sub(10,10))

var calc2 = require('./calc2'); //exports객체에서 모듈파일을 불러드린다, require을 이용해 calc.js의 경로를 찾아 불러드린다.
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc2.multiple(10,10))