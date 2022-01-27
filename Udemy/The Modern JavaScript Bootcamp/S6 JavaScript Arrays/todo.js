// Create an array with five todos
// You have x Todos
// Print the first and the second to the last items
// ==> Todo: Read 5 pages

// Challenge Add todo task as a function
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

// Challenge area
const todo = ['30 pushups', '15 pullups', 'Read 10 pages of the book', 'Five hours of study1']

// Delete the 3rd item
todo.splice(2, 1)

// Add a new item to the end
todo.push('Read ten pages of the management time book')
todo.push('Do 5 pullups')

// Remove the first item from the list
todo.shift()
console.log(todo)


// foorEach Challenge
todo.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}.`)
})


// Foor loop challenge area
// Printing the todo list items without using forEach()

for (let count = 0; count < todo.length; count++) {
    let index = count + 1
    console.log(`${index}.`, todo[count])
}
