// Searching Arrays Challenge

const todoList = []

// Add todo
const addTodo = function (todoList, todo) {
    todoList.push(todo)
}

// Delete todo
const deleteTodo = function (todoList, todoTitle) {
    const index = todoList.findIndex(function (todo) {
        return todo.title.toLowerCase() === todoTitle.toLowerCase()
    })

    if (index > -1) {
        todoList.splice(index, 1)
    }
}

addTodo(todoList, {
    title: 'Read Book 1',
    completed: true
})
addTodo(todoList, {
    title: 'Read book 2',
    completed: false
})

console.log(todoList)

deleteTodo(todoList, 'Read book 1')
console.log(todoList)
