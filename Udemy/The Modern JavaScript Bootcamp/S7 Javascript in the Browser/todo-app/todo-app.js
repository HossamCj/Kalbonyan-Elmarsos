const todoList = [{
    text: 'Three hours 30 minutes of coding on js-udemy',
    completed: false
}, {
    text: 'Read ( Zad Werd )',
    completed: false
}, {
    text: 'Read 20 pages from time management book',
    completed: false
}, {
    text: 'Visit the family',
    completed: true
}]


// Message like: You have 2 todos left (p element)
// Add a p for each todo above (user text value)

const inCompletedTodo = todoList.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h3')
summary.textContent = `You have ${inCompletedTodo.length} todos left`
document.querySelector('body').appendChild(summary)

todoList.forEach(function (todo) {
    const li = document.createElement('li')
    li.textContent = todo.text
    document.querySelector('ol').appendChild(li)
})