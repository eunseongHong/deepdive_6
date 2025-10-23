const a = 'hello'
const b = 3;

const c = a + b; //c의 데이터 타입은 뭘까요? 문자열 + 넘버 ===> 문자열 자동 변환
const d = '5'

console.log(b + d); // 문자열 + 넘버 -> 문자열
console.log(b * d); // 문자열 * 넘버 -> 넘버
console.log(a * b); // NaN -> Not a Number 숫자 값이 아니라 계산이 안되는 형태.

let e; // const, let 변수 선언, 값을 지정하지 않았다. -> const는 값을 지정하지 않으면 에러가 나지만 let은 에러가 나지 않는다.


console.log("e",e);


const f =null; // null: 빈 값
console.log("f",f);


const fruits = [ 'banana','melon','watermelon'] //[] array(배열): 여러개의 데이터 값을 넣을 수 있음
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);





// console.log(sum(3,5));


// console.log(remainer(5,3));
// const remainer = function(a,b) { return a % b }

// function sum(a,b){
//     return a+b;
// }




// 호이스팅이란?: 호이스팅은 JavaScript에서 변수나 함수 선언이 코드의 맨 위로 끌어올려지는 현상을 의미합니다. 이로 인해 선언 전에 변수를 사용해도 오류가 발생하지 않고, 변수가 선언된 것처럼 동작합니다. 
// function은 함수를 밑에 적던 위에 적던 호출이 가능. 위에서 먼저 선언하고 밑에 계산하는 것이 제일 이상적임.