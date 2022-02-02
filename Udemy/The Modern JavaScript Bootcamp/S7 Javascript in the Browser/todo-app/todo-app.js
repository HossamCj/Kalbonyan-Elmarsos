const todoList = [{
    text: 'Three hours 30 minutes of coding on js-udemy',
    completed: false
}, {
    text: 'Read ( Zad Werd )',
    completed: true
}, {
    text: 'Read 20 pages from time management book',
    completed: false
}, {
    text: 'Visit the family',
    completed: false
}]


const filters = {
    searchText: ''
}

const renderTodoList = function (todoList, filters) {
    const filteredTodoList = todoList.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todo-list').innerHTML = ''

    filteredTodoList.forEach(function (todo) {
        const todoElement = document.createElement('p')
        todoElement.textContent = todo.text
        document.querySelector('#todo-list').appendChild(todoElement)
    })

    const inCompletedTodo = filteredTodoList.filter(function (todo) {
        return !todo.completed
    })
    
    const summary = document.createElement('h3')
    summary.textContent = `You have ${inCompletedTodo.length} todos left`
    document.querySelector('#todo-list').appendChild(summary)
    
}

renderTodoList(todoList, filters)

// Add todo search filter
document.querySelector('#search-todo-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodoList(todoList, filters)
})

// AddTodo
document.querySelector('#add-todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todoList.push({
        text: e.target.elements.addTodo.value,
        completed: false
    })

    renderTodoList(todoList, filters)

    e.target.elements.addTodo.value = ''
})