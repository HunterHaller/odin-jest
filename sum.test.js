// EXAMPLE TEST:
//const sum = require('./sum');

//Replace 'require' with import/export syntax, as allowed by babel:
import { sum } from "./sum.js";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


// PROJECT TESTS:

//capitalize

import { capitalize } from "./capitalize.js";

test('Capitalizes the first character of a given string.', () => {
  expect(capitalize("poopoo")).toBe("Poopoo");
});

//reverseString

import {reverseString } from "./reverseString.js";

test('Reverses a string.', () => {
  expect(reverseString("poopoo")).toBe("oopoop");
});

//calculator

import { add, subtract, divide, multiply } from "./calculator.js";

test('Performs several basic mathematical functions.', () => {
  expect(add(1, 2)).toBe(3);
  expect(subtract(2, 1)).toBe(1);
  expect(divide(100, 2)).toBe(50);
  expect(multiply(2, 2)).toBe(4);
});

//caesarCipher

import { caesarCipher } from "./caesarCipher.js";

test("Converts a string using the Caesar cipher by a given number.", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

//analyzeArray

import { analyzeArray } from "./analyzeArray.js";

test("Takes an array of numbers and returns an object with certain properties.", () => {
  const object = analyzeArray([1,8,3,4,2,6]);
  
  expect(object.average).toBe(4);
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.length).toBe(6);
})