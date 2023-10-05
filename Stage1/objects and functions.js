//task 1,2,3
const car = {
    color: "green",
    engine: 120,
    power(){
        console.log(this.engine);
    }
}

car.power(); // 120

//task 4
function countFruits (apples, pears){
    return apples+pears;
}

countFruits(3,4) // 7

//task 5
function defineName (name){
    return name? `Hello ${name}` : `There is no such name`;
}

defineName ("Ivan"); // Hello Ivan
defineName (''); // There is no such name
defineName (); // There is no such name

//task 6
function calculatingTypes (a,b,c,d,e,f,g,h){
    const arr = [a,b,c,d,e,f,g,h];
    return new Set(arr.map(item => {
       return typeof(item);
    }))
}
calculatingTypes(1,'2',['qwe','r',6], true, false, {}, 4) //{'number', 'string', 'object', 'boolean', 'undefined'}


//task 7
function isPrime(numbers) {
    return numbers.forEach(item => {
       if (item < 2) {
           return;
         }
         for (let i = 2; i <= Math.sqrt(item); i++) {
           if (item % i === 0) {
             return;
           }
         }
         console.log(item);
     })
     }
     const arr6 = [1,6,7,8,3,4,5,6];
     isPrime(arr6); // 7,3,5

