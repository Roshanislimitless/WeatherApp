const myApp = require('./index1.js');
const {sum, multiply} = myApp;


test('here you write the name', () => {
    const first = 8;
    const second = '8';
    const result = sum(first, second);
    expect(first).not.toBeNull();
    expect(first + second).toBe(result)
})

