const _ = require('lodash')

module.exports = {

    convertCelsiusToFahrenheit: (celsius)=>{
        let fahrenheit = celsius * 9/5 + 32
        return fahrenheit
    },

    reverseString: (string)=>{
        return string.split('').reverse().join('')
    }

}
