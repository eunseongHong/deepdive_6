// Mission 01. 사각형의 크기를 구하는 함수 (가로, 세로)
// 함수명: getRectArea
// 결과: 사각형의 크기는 ___입니다.

function getRectArea(w, h){
    const result = w * h;
    console.log(`사각형의 크기는 ${result}입니다.`)
}

getRectArea(5, 10);



// Mission 02. 학생의 성적표를 받아서, 평균을 구하는 함수를 만드세요.(국어,영어,수학)

function getAverage(a, b, c) {
  const average = (a + b + c) / 3;
  console.log(`당신의 평균 점수는 ${average}점입니다.`);
}

getAverage(90, 80, 70);



// Mission 03. 반지름을 입력받아 원의 넓이를 구하는 함수를 만드세요.
// 원의넓이 === 반지름* 반지름* 원주율


function getEllArea(r, p){
    const result = r * r * p;
    console.log(`원의 넓이는 ${result}입니다.`);
}

getEllArea(6, 3.14);



// Mission 04. 원래가격과 할인율을 입력하면, 최종 판매가격을 구하는 함수를 만드세요.

function clacDiscount(x, y){
    const z = x * (y / 100);
    console.log(`기존 가격 ${x}원에서 ${y}%가 할인되어 최종 가격은 ${z}원 입니다.`)
}

clacDiscount(150000, 10);



// Mission 05. 두수를 입력받아, 나눈 나머지 값을 구하는 함수를 만드세요.

function calcSum(x, y){
    const z = x % y;
    console.log(`${x}를 ${y}로 나눈 나머지 값은 ${z}입니다.`);
}

calcSum(12,7);