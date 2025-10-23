// Mission 01. animals라는 변수에 동물이름을 5가지 입력하여 배열 변수를 만들고, 3번째 동물이름을 출력하시오.

const animals = ['rabbit','tiger','puppy','parrot','lion']
console.log(animals[0]);

for (let i = 0; i < 5; i++) {
    let print = `${i + 1}. ${animals[i]}`;
    console.log(print);
}
   


// for (const animal of animals){
//     console.log(animal);
// }

/* for(초기화 ; 조건식 ; 증감식){
    실행문
} */


// 0부터 4까지 출력하겠다.
// for(let i=0; i < 5; i++){
//     console.log(i)
// }


/*
1. rabbit
2. tiger
3. puppy
4. parrot
5. lion
*/