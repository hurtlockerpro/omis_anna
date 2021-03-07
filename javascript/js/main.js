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
  //return x * y;
}

console.log(multiply(10, 15));

let result = multiply(11, 16);
//multiply(12, 17)

// 0 = "audi"

// json object
// key: value
//['audi']
let obj1 = {
  auto1: 'audi',
  auto2: 'bmw',
  auto3: 'citroen',
  auto4: {
    a: 1,
    b: 2,
  },
  auto5: {
    c: 'text',
    d: true,
  },
};

//array[1]
console.log(obj1.auto3);
console.log(obj1.auto4.b);

let simpleArray = Object.entries(obj1);
console.log(simpleArray);

for (let index = 0; index < simpleArray.length; index++) {
  console.log(
    'Key: ',
    simpleArray[index][0],
    ', Value: ',
    simpleArray[index][1]
  );

  if (typeof simpleArray[index][1] == 'object') {
    // <--
    let simpleArray2 = Object.entries(simpleArray[index][1]);
    for (let subIndex = 0; subIndex < simpleArray2.length; subIndex++) {
      console.log(
        ' sub: Key: ',
        simpleArray2[subIndex][0],
        ', Value: ',
        simpleArray2[subIndex][1]
      );
    }
  }
}

class GeometricalFigures {
  //_width;

  #radius

  static diagonal = 10;

  constructor(width, raduis = 50,  height = 100) {
    console.log("this is constructor")

    if (width <= 0) {
      console.log('Please insert square width')
    } else {
      this._width = width
    }

    if (height <= 0) {
      console.log('Please insert square height')
    } else {
      this._height = height
    }

    this.#radius = raduis
  }

  drawSquare() {
    let div = document.createElement('div')
    div.style.width = this._width + 'px'
    div.style.height = this._height + 'px'

    div.style.border = '1px'
    div.style.borderStyle = 'solid' // <--
    div.style.borderColor = 'black'

    return div.outerHTML
  }

  static getDiagonal()
  {
    console.log("diagonal: ", this.diagonal)
  }
}

// 1 
let cls = new GeometricalFigures()
cls._height = 150
cls._width = 250
console.log(cls.drawSquare())
document.write(cls.drawSquare())


// 2
let cls1 = new GeometricalFigures(25, 150)
console.log(cls1.drawSquare())
document.write(cls1.drawSquare())

// 3 
let cls3 = GeometricalFigures.diagonal;
GeometricalFigures.getDiagonal()

