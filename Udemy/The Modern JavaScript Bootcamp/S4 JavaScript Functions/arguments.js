// Multiple arguemnts
// let sum = function(a, b, c) {
//     return a + b + c
// }

// let sumResult = sum(2, 2, 2)
// console.log(sumResult)


// Defualt arguments value
let getScoreDetail = function(name = 'Anonymous', score = 0) {
    message = 'Name: ' + name + ', Score: ' + score
    return message
}

let score1 = getScoreDetail(undefined, 100)

console.log(score1)


// Challenge area

// Total, tip precent .2
let getTip = function (total, tipPrecent = 0.2) {
    let result = total * tipPrecent
    return result
}

let tip = getTip(100)
console.log(tip)

// Add new tip precentage
let newTip = getTip(100, .25)
console.log(newTip)