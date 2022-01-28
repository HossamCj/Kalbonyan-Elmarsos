let notesAr = ['A', 'B', 'C', 'D']
let text = 'مجرد بعض الكمات'

// console.log(Array.isArray(text)) // Checking if the object is an array
// notesAr.push('ج') // Add from the back of the (array / list)
// notesAr.pop() // Deleting from the last of the (array / list)
// notesAr.shift('A') // Deleting from the beginning of the (array / list)
// notesAr.unshift('A') // Adding from the front of the (array / list)
// console.log(notesAr[notesAr.length -1]) // Printing the last item in the array 
// notesAr.splice(-1, 1, 'أ') // choose the value, delete or not / and how many objects, replacing 

// // For loop: from 0 index to the last of the array
// for (let count = 0; count < notesAr.length; count++) {
//     console.log(notesAr[count])
// }

// console.log('Break Console')

// // Foor loop: from -1 index to the beginning of the array
// for (let count = notesAr.length - 1; count >= 0; count--) {
//     console.log(notesAr[count])
// }


const notes = [
    {
        title: 'Note 1',
        body: 'Body 1',
    },
    {
        title: 'Note 2',
        body: 'Body 2',
    },
    {
        title: 'Note 3',
        body: 'Body 3',
    }
]

// Using findIndex()
const findNote = function (note, noteTitle) {
    const index = note.findIndex(function (note, index) {
        return note.title === noteTitle
    })

    return notes[index]
}

const note = findNote(notes, 'Note 2')
console.log(note)


// Using find()
const find_note = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

let note2 = find_note(notes, 'note 3')
console.log(note2)