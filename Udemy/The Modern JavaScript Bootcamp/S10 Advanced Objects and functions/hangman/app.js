// Premitive value: string boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype -- null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null


const fun = () => 1
console.log(fun)