# TypeScript Type Narrowing Bug
This repository demonstrates an uncommon bug related to type narrowing in TypeScript conditional types. The bug arises when the compiler fails to accurately narrow down the type of a variable within a conditional check, leading to unexpected type errors.

## Bug Description
The core issue lies in how TypeScript handles type narrowing within conditional types.  Despite correctly identifying the type using `typeof`, the compiler does not sufficiently refine the type within the `else` block, resulting in a type error.

## How to Reproduce
1. Clone the repository.
2. Open `bug.ts`.
3. Observe the type error reported by the compiler in the `else` block of the `processValue` function.

## Solution
The solution involves explicitly casting the `value` to `number` before using the `toString()` method within the `else` block. This forces TypeScript to recognize the type correctly.  See `bugSolution.ts` for a working example.

## Contributing
Contributions are welcome!