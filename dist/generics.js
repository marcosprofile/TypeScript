const returnValue = (value) => value;
const message = returnValue('Hello World!');
const count = returnValue(5);
function getFirstValueFromArray(array) {
    return array[0];
}
const firstValueFromStringArray = getFirstValueFromArray(['1', '2']);
const firstValueFromNumberArray = getFirstValueFromArray([5, 10]);
// Promises
const returnPromise = async () => {
    return 5;
};
// Classes
class GenericNumber {
    zeroValue;
    sum;
    constructor(zeroValue, sum) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => {
    return x + y;
});
export {};
//# sourceMappingURL=generics.js.map