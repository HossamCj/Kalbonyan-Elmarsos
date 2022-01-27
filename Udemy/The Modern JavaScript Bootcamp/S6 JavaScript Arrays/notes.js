let notesAr = ['A', 'B', 'C', 'D']
let text = 'مجرد بعض الكمات'

console.log(Array.isArray(text)) 

// notesAr.push('ج') // Add from the back of the (array / list)
// notesAr.pop() // Deleting from the last of the (array / list)
// notesAr.shift('A') // Deleting from the beginning of the (array / list)
// notesAr.unshift('A') // Adding from the front of the (array / list)
// console.log(notesAr[notesAr.length -1]) // Printing the last item in the array 

notesAr.splice(-1, 1, 'أ')
notesAr.splice(-2, 1, 'ب')
notesAr.splice(-3, 1, 'ت')
notesAr.splice(-4, 1, 'ث')
console.log(notesAr)


// For loop: Counting....
for (let count = 0; count < notesAr.length; count++) {
    console.log(notesAr[count])
}

console.log('Break')

for (let count = notesAr.length - 1; count >= 0; count--) {
    console.log(notesAr[count])
}