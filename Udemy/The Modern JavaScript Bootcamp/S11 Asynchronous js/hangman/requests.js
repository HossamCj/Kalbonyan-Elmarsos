<<<<<<< HEAD
const getPuzzle = (wordCount, callback) => {
    const request = new XMLHttpRequest()
=======
const getPuzzle = (callback) => {
   const request = new XMLHttpRequest()
>>>>>>> 16cbe55a1134f06873a155de7cc0fe83abd7789b

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {

            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)

        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })
<<<<<<< HEAD

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
=======
    
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
>>>>>>> 16cbe55a1134f06873a155de7cc0fe83abd7789b
    request.send()
}

const getCountry = (countryCode, callback) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country)
        } else if (e.target.readyStatet === 4) {
            callback('Unable to fetch data')
        }
    })

    countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
    countryRequest.send()
}