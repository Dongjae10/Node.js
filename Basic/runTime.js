// 실행시간 측정
var result = 0;
console.time('duration_sum'); //실행시간을 측정하기 위한 시작 시간을 기록
for (var i = 0; i <= 1000 ; i++){
    result += i;
}
console.timeEnd('duration_sum'); //실행시간을 측정하기 위한 끝 시간을 기록
console.log('1 부터 1000까지 더한 결과물 : %d', result);