const todosToDelete = document.querySelectorAll('li')

todosToDelete.forEach(function (todo) {
    if (todo.textContent.toLowerCase().includes('shehada') ) {
        todo.remove()
    }
})