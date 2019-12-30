const _ = require('lodash')

module.exports = {

    convertCelsiusToFahrenheit: (celsius)=>{
        let fahrenheit = celsius * 9/5 + 32
        return fahrenheit
    },

    reverseString: (string)=>{
        return string.split('').reverse().join('')
    },

    factorializeNumber: (number)=>{
        let result = 1
        while(number>0){
            result = result * number
            number -= 1
        }
        return result
    },

    findLongestWordLength: (string)=>{
        let stringArray = string.split(' ')
        let letterArray = _.map(stringArray, word =>{
            return word.split('').length
        })
        return Math.max(...letterArray)
    },

    largestOfFour: (array) =>{
        return _.map(array,item => Math.max(...item))
    },

    confirmEnding: (string, target) =>{
        let endingLength = target.length
        let endingSubString = string.substring(string.length - endingLength)
        return endingSubString === target
    }

}
