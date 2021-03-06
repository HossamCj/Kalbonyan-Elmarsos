// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to the localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })
    
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
    
}

// Generat a DOM structure for a note
const generateNoteDOM = function (note) {
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    const removeNoteButton = document.createElement('button')
    
    // Setup remove note element
    removeNoteButton.textContent = 'x'
    noteElement.appendChild(removeNoteButton)
    removeNoteButton.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title text
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'Unnamed note!'
    }
    textElement.setAttribute('href', `edit-note.html#${note.id}`)
    noteElement.appendChild(textElement)

    return noteElement
    
}


// Sort notes by one of three ways
const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited') {

        return notes.sort(function (a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })

    } else if (sortBy === 'byCreated') {

        return notes.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })

    } else if (sortBy === 'alphabetical') {

        return notes.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1 
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
        
    }
}


// Render application notes
const renderNotes = function (notes, filters) {
    notes = sortNotes(notes, filters.sortBy)
    
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}

const generateLastEdited = function (timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`
}