const a = 10;
const b = "10";
const c = true;
const d = 3;


console.log(typeof a); //number
console.log(typeof b); //string
console.log(typeof c); //boolean

// 산술 연산자
console.log(a+d)
console.log(a*d)
console.log(a/d)
console.log(a-d) 
console.log(a%d) //나머지 연산자


//비교 연산자 - boolean 값을 반환한다.
console.log(a == b); // true 값만 비교, 데이터 타입은 비교하지 않는다.
console.log(a != b); // 부정연산자, 같지 않다는 뜻
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a === b); // false -> 값과 데이터 타입을 모두 비교
console.log(a !== b); // 부정연산자, 같지 않다는 뜻이지만 데이터 타입까지 비교