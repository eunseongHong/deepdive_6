//노드몬을 껐다가(ctrl + c), 재실행 nodemon 1020_02.js

const a = 13;
const b = 5;



const sum = a + b;
const isEven = a % 2; /* a 값이 짝수인지, 짝수라면 true, 홀수라면 false */

console.log(sum);
console.log(isEven);

function calcSum(x,y) {
    const result = x + y;
    console.log(result) // return result
}

calcSum(3,5);
calcSum(a,b);
calcSum(10,15);


function createIcecream(syrup, topping){
    const result = `${syrup} ${topping} 아이스크림이 만들어 졌습니다.`
    console.log(result);
}
console.log(createIcecream)


createIcecream('choco','almond') //초코 아몬드 아이스크림이 완성되었습니다.
createIcecream('vanila','peanut') //초코 아몬드 아이스크림이 완성되었습니다.