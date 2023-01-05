/*завдання 1
Функція вищого порядку — функція, що приймає як аргументи інші функції або повертає іншу функцію як результат.
- map()
-filter()
-reduce
*/

//Завдання 2
//потрібно порахувати суму цих чисел за допомогою рекурсії та без неї. 
console.log("\nЗавдання 2");

function sum(a)
{
if (a==1) return a ; 
else {return a+sum(a-1)}
};
console.log("Рекурсія");
console.log(sum(10));

console.log("Цикл");

function sumWithout(b){
let sumN=0;
for (let i = 1; i < b+1; i++) {
 sumN=sumN+i;
}
return sumN;
}
console.log(sumWithout(10));

//Завдання 3
console.log("\nЗавдання 3");
function f(a)
{
if (a==1) return a ; 
else {return a*f(a-1)}
};
console.log("Факторіал");
console.log(f(9));


//Завдання 4
console.log("\nЗавдання 4");
let array=[1, [2, [3, [4,5]]], 7,8, 10];
let ar=[];

function g(array) {
for (let i = 0; i < array.length; i++) {
  if(!Array.isArray(array[i])) ar.push(array[i]);
  else  g(array[i]);
}
}
g(array);
console.log(ar);


//Завдання 5
console.log('\nЗавдання 5');
function ob(domain){
return function (url){
    return `http://${url}.${domain}`;
}
}
const firstExample=ob('com');
const secondExample=ob('net');
console.log(firstExample('google'));
console.log(secondExample('savefrom'));

//Завдання 6
console.log('\nЗавдання 6');
function Counter() {
  let counter = 0;
  function Increase() {
  return counter++;
      }
  return Increase
  }
  let counter1 = Counter();
  console.log(counter1()); // 0
  console.log(counter1()); // 1
  console.log(counter1()); // 2
  
  //Завдання 7
  console.log('\nЗавдання 7');
function nNumbers(){
    return function (number){
     if(number%2===1) return ` Число непарне -${number}, результат = ${number+5}`;
     else return `Число парне - ${number}`
}
}
const numberFor6=nNumbers();
console.log(numberFor6(0));
console.log(numberFor6(1));
console.log(numberFor6(2));
console.log(numberFor6(3));
console.log(numberFor6(4));
console.log(numberFor6(5));