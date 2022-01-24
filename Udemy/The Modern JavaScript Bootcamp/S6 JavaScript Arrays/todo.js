// Create an array with five todos
// You have x Todos
// Print the first and the second to the last items
// ==> Todo: Read 5 pages


let todoList = []

let todoApp = function (todo) {
    todoList.push(todo)
    let popupMessage = `You have: ${todoList.length} todos, `

    return popupMessage + todoList[todoList.length - 1]
}

console.log(todoApp('Read 20 pages'))
console.log(todoApp('30 Pushup'))
console.log(todoApp('Read 1 page with the family'))
console.log(todoApp(' Do 5 pullup'))
console.log(todoApp(' Do 4 pullup'))

console.log(todoList)

