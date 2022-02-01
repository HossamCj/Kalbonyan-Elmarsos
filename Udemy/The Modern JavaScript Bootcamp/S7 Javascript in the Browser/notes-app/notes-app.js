// DOM ==   Document Object Model
const notes = [
    {
        title: 'Next Plane إن شاء الله',
        description: 'Study daily until end of Feb'
    },
    {
        title: 'Day 25',
        description: 'Start adding more tasks to the daily tasks'
    },
    {
        title: 'the internship finished',
        description: 'At the end of Feb إن شاء الله it should be finished'
    }
]

const filters = {
    searchText: ''
}

const renderNote = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}


document.querySelector('#add-note').addEventListener('click', function (e) {
    e.target.textContent = 'Note Added!'
    console.log('Note Added!')
})

document.querySelector('#delete-all-notes').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

// Add filter for search text
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNote(notes, filters)
})  