// 삼항 연산자


const b = 10;
const result = b > 10 ? "b는 10보다 크다." : "b는 10보다 작다.";
console.log(result);


//내가 입력한 수가 10보다 큰 지를 매번 판별

function overTen (number){
    const isOver = number > 10 ? `${number}는'10보다 크다` : `${number}는 10보다 작다`;
    console.log(isOver)
}

overTen(13);
overTen(3);
overTen(5);
overTen(-1);