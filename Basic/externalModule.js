//외장 모듈
var nconf = require('nconf');
nconf.env();
console.log('OS 환경 변수의 값 : %s',nconf.get('OS'));
//npm init을 통해 pakage.jason 생성
//npm install <nconf> --save를 통해 pakage.jason에 저장
//외장모듈 사용, npm을 이용해서 nconf(외장모듈)를 다운받아 시스템 환경변수에 접근할수있다.