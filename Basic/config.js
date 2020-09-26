//환경변수
console.log('argv 속성의 파라미터 수 : ' + process.argv.length); //프로세스를 실행할때 전달되는 파라미터 정보 개수
console.dir(process.argv); // node와 js파일이 파라미터가 된다.

if(process.argv.length > 2){
    console.log('세 번째 파라미터의 값 : %s', process.argv[2]) //현재 js파일에 파라미터를 추가하면 배열로 구분하여 출력할 수 있다.
}
process.argv.forEach(function (items,index){
    console.log(index + ' : ',items) //argv(프로세스를 실행할 때 전달되는 파라미터의 정보)를 인덱스 값과 아이템값으로 가각 출력할 수 있다.
});

console.dir(process.env); //env: 환경 변수 정보
console.log('OS 환경 변수의 값 : ' + process.env['OS'])