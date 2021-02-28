//alert('Hello javascript')

let name = 'Vladimir';

console.log('name ', name, ' ', typeof name);

let x = 10;
let myBool = true;
let y; // undefined
/*
egew
wd
fwefgwegf
wefb
*/
let myNull = null; // 0

console.log('x ', typeof x);
console.log('y ', typeof y);
console.log('myBool ', typeof myBool);
console.log('myNull ', typeof myNull);

x = 'Vladimir';
console.log('x ', typeof x);

x = '10';

console.log('result: ', x + 20); // concatenation
console.log('result: ', Number(x) + 20); // math

parseFloat(x); // double
parseInt(x); // integer

let arr = []; // array
let obj = {}; // object

console.log('arr: ', typeof arr);
console.log('obj = ', typeof obj);

// array
let array = ['audi', 'bwm', 'citroen', 10, true, undefined];

// increment
// index = index + 1
// index += 1;

for (let index = 0; index < array.length; index++) {
  let element = array[index];
  console.log('element: [' + index + ']', element);
}

console.log('5 element: ', array[4]);

/*
console.log ('-------------')
array.forEach ((element, index) => {

    console.log ("element: [" + index + "]", element)
    
});
*/

function multiply(x, y) {
  // x = argument, y = argument // VOID
  //console.log(x * y)
  return x * y;
}

console.log(multiply(10, 15));

let result = multiply(11, 16);
//multiply(12, 17)

// 0 = "audi"

let obj1 = {
  auto1: 'audi',
  auto2: 'bmw',
  auto3: 'citroen',
  auto4: {
    a: 1,
    b: 2,
  },
};

//array[1]
console.log(obj1.auto3);
console.log(obj1.auto4.b);
