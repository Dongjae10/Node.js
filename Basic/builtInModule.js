//내장 모듈
//시스템 정보를 알려주는 os 모듈
var os = require('os');

console.log('시스템 hostname : %s', os.hostname);
console.log('시스템 메모리 : %d',os.freemem(),os.totalmem());//사용 가능한 메모리, 전체 메모리
console.log('시스템 CPU 정보\n');
console.dir(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces());

//파일 패스를 다루는 path 모듈
var path = require('path');

//여러개의 이름들을 모두 합쳐 하나의 파일 패스로 만들어 줍니다.
var directories = ["Users","mike","docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리 : %s', docsDirectory);

//디렉터리 이름과 파일 이름 합치기
var curPath = path.join('/Users/mike', 'notepad.dmg');
console.log('파일 패스 : %s', curPath);

var filename = '/Users/mike/notepad.dmg'
var dirname = path.dirname(filename); //디렉터리
var basename = path.basename(filename); //파일이름
var extname = path.extname(filename); //확장자

console.log('디렉터리 : %s, 파일 이름 : %s, 확장자 : %s',dirname, basename, extname)





