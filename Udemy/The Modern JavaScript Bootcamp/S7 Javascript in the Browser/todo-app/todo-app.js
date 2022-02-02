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
    searchText: '',
    hideCompleted: false
}


const renderTodoList = function (todoList, filters) {
    const filteredTodoList = todoList.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    // filteredTodoList = filteredTodoList.filter(function (todo) {
        // return !filters.hideCompleted || !todo.completed
    //     if (filters.hideCompleted) {
    //         return !todo.completed
    //     } else {
    //         return true
    //     }
    // })

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

// Hide completed
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodoList(todoList, filters)
})