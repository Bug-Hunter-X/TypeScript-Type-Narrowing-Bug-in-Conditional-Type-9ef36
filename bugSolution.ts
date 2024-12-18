function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 will be 8
let result2 = subtract(10, 4); // result2 will be 6

console.log(result1); // Output: 8
console.log(result2); // Output: 6

// Corrected code with explicit type assertion
function processValue(value: string | number): string {
  if (typeof value === 'string') {
    return value.toUpperCase(); 
  } else {
    return (value as number).toString(); // Type assertion fixes the error
  }
}

let result3 = processValue("hello");
let result4 = processValue(123);
console.log(result3); //Output: HELLO
console.log(result4); // Output: 123