//----- Hello, World!

function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log(parameterVariable);
}

//----- Data Types
const firstInteger = 4;
const firstDecimal = 4.0;
const firstString = 'HackerRank';
console.log(firstInteger + Number(secondInteger));
//----- ko dùng đc parseInt()? : console.log(firstInteger + parseInt(secondInteger));
console.log(firstDecimal + Number(secondDecimal));
console.log(firstString.concat(secondString));

//----- Arithmetic Operators
function getArea(length, width) {
    let area;
    area = length * width;
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    perimeter = (length + width) *2;
    return perimeter;
}


