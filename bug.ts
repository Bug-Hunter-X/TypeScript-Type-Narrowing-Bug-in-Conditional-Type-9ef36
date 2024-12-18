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

// Uncommon bug: Type narrowing in conditional type
function processValue(value: string | number): string {
  if (typeof value === 'string') {
    return value.toUpperCase(); // No error
  } else {
    return value.toString(); //Error: Property 'toString' does not exist on type 'number'
  }
}