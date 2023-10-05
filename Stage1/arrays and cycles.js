//task 1
const movieNames = ['Operation I', 'Terminator', 'Forsage', 'Tom and Jery'];
movieNames.forEach(item => console.log(item)); // Operation I
                                                //Terminator
                                                //Forsage
                                                //Tom and Jery


//task 2
const cars = ['BMW', 'Mazda', 'Ford', 'VW', 'Audi', 'Toyota', 'Mercedes', 'Kia'];
const carsStr = cars.join(' ');
console.log(carsStr); // BMW Mazda Ford VW Audi Toyota Mercedes Kia
const carsArr = carsStr.split(' ');
console.log(carsArr); // ['BMW', 'Mazda', 'Ford', 'VW', 'Audi', 'Toyota', 'Mercedes', 'Kia']


//task 3
const friends = ['Ivan', 'Lena', 'Andrey', 'Max', 'Alex'];
friends.map(item => console.log(`Hello ${item}`)); // Hello Ivan
                                                    //Hello Lena
                                                    //Hello Andrey
                                                    //Hello Max
                                                    //Hello Alex

//task 4
const digits = [1,2,3,4,5,6,7,8,9,0];
digits.forEach(item => console.log(Boolean(item))); // true, true, true, true, true, true, true, true, true, false

//task 5
const arr = [1,6,7,8,3,4,5,6];
arr.sort((a,b) => {return b-a}); // [8, 7, 6, 6, 5, 4, 3, 1]

//task 6
const arr2 = [1,6,7,8,3,4,5,6];
arr2.filter(item => {return item >3}); // [6, 7, 8, 4, 5, 6]

//task 7
function findIndex (arr, number){
   return arr.indexOf(number);
}

const arr3 = [1,6,7,8,3,4,5,6];
findIndex(arr3,3); // 4   

//task 8
function printA(digit){
for(let i = digit; i >= 10; i--){
    console.log('a');
}
}
printA(15); // a,a,a,a,a,a

//task 9
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
  const arr9 = [1,6,7,8,3,4,5,6];
  isPrime(arr9); // 7,3,5


//task 10
function oddNumbers(arr){
    return arr.map(item => {
        if(item %2 != 0){
            return item;
        };
    }).filter(item => item)
}

const arr10 = [1,6,7,8,3,4,5,6];
oddNumbers(arr10); // [1, 7, 3, 5]


