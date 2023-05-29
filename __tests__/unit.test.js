// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
console.log(functions);
// TODO - Part 2
test('isPhoneNumber test 1', () => {
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
});
test('isPhoneNumber test 2', () => {
    expect(functions.isPhoneNumber('(000)-000-0000')).toBe(true);
});
test('isPhoneNumber test 3', () => {
    expect(functions.isPhoneNumber('00-00-0')).toBe(false);
});
test('isPhoneNumber test 4', () => {
    expect(functions.isPhoneNumber('1')).toBe(false);
});

test('isEmail test 1', () => {
    expect(functions.isEmail('abcde@ucsd.edu')).toBe(true);
});
test('isEmail test 2', () => {
    expect(functions.isEmail('lol@gmail.com')).toBe(true);
});
test('isEmail test 3', () => {
    expect(functions.isEmail('laksdjflsdjf')).toBe(false);
});
test('isEmail test 4', () => {
    expect(functions.isEmail('@aaaaaaa')).toBe(false);
});

test('isStrongPassword test 1', () => {
    expect(functions.isStrongPassword('abcdefg')).toBe(true);
});
test('isStrongPassword test 2', () => {
    expect(functions.isStrongPassword('a12345_6')).toBe(true);
});
test('isStrongPassword test 3', () => {
    expect(functions.isStrongPassword('absfhaaaaaaaaaa!ofnaoi')).toBe(false);
});
test('isStrongPassword test 4', () => {
    expect(functions.isStrongPassword('1vsa')).toBe(false);
});

test('isDate test 1', () => {
    expect(functions.isDate('05/27/2023')).toBe(true);
});
test('isDate test 2', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
});
test('isDate test 3', () => {
    expect(functions.isDate('kldjfalsdjf')).toBe(false);
});
test('isDate test 4', () => {
    expect(functions.isDate('27')).toBe(false);
});

test('isHexColor test 1', () => {
    expect(functions.isHexColor('#123')).toBe(true);
});
test('isHexColor test 2', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
});
test('isHexColor test 3', () => {
    expect(functions.isHexColor('#12')).toBe(false);
});
test('isHexColor test 4', () => {
    expect(functions.isHexColor('52')).toBe(false);
});
