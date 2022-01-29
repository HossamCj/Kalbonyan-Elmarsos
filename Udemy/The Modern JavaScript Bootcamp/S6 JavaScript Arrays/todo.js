// Searching Arrays Challenge

const todoList = []

// Add todoList
const addTodo = function (todoList, todo) {
    todoList.push(todo)
}

// Delete todoList
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
    title: 'Read zad book 1',
    completed: true
})
addTodo(todoList, {
    title: '30 minutes of exercise',
    completed: false
})
deleteTodo(todoList, 'Read book 1')
addTodo(todoList, {
    'title': 'Ready with the family and hangout with them',
    completed: false,
})
// console.log(todoList)


// getThingsTodo() Challenge
const getThingsTodo = function (todoList) {
    return todoList.filter(function (todo) {
        return todo.completed
    })
}

console.log(getThingsTodo(todoList))