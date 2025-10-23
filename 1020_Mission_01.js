// Mission 01. 사각형의 크기를 구하는 함수 (가로, 세로)
// 함수명: getRectArea
// 결과: 사각형의 크기는 ___입니다.
function getRectArea(h,v) {
    const result h * v;
    console.log(`사각형의 크기는 ${result}입니다.`);
}

getRectArea(3,5);
getRectArea(20,12);



// Mission 02. 입력받은 유저의 나이가 성인인지 미성년인지 판별하시오
// 함수명 : isAdult
// 결과 : 'hongildong'님은 '미성년자'입니다 / '성인'입니다.

function isAdult(username,age){
    const result = age >= 18 ? "성인" : "미성년자";
    console.log(`${username}님은 ${result}입니다.`)
}

isAdult('Ghost', 12);
isAdult('Daniel', 22);



// Mission 03. 학생의 성적표를 받아서, 평균을 구하시오.(국어,영어,수학)
// 함수명 : getAverage
// 결과 : 당신의 평균점수는 ____ 입니다. (a+b+c)/3

function getAverage(a, b, c){
    const average = (a + b + c) / 3;
    console.log(`당신의 평균 점수는 ${average}점 입니다.`);
}

getAverage(100, 100, 100);
getAverage(100, 100, 0);
getAverage(35, 20, 67);


// Mission 04. 아이디와 패스워드를 검증하여,
// 함수명 : checkLogin
// 결과 : ghost님 '로그인성공','로그인실패'를 출력하세요