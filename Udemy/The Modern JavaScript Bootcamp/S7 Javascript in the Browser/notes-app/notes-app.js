// DOM ==   Document Object Model
const notes = [
    {
        title: 'Nex Plane إن شاء الله',
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
    console.log(e.target.value)
})