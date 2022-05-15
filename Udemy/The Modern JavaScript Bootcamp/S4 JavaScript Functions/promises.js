// Callback function
const getDataCallback = (callback) => {
    setTimeout(() => {
        // callback(undefined, 'This is callback data
        callback('This is callback error', undefined)
    }, 2000)
}

getDataCallback((error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})


// Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is my success data: ${data}`)
        // reject('This is a promise error')
    }, 2000)
})

const myPromise = getDataPromise(123)

myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})