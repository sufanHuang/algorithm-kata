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
    },

    repeatString: (string, number)=>{
        let result = ''
        while(number>0){
            result = result.concat(string)
            number -= 1
        }
        return result
    },

    truncateString: (string, number)=>{
        if(string.length <= number){
            return string
        }
        return string.substring(0,number) + '...'
    },

    findersKeepers: (array, func)=>{
        let returnNumber= []

        _.each(array, (value)=> {
            if(func(value)){
                returnNumber.push(value)
            }
        })
        return returnNumber[0]
    },

    booWho: (value)=>{
        if(typeof(value)=== 'boolean'){
            return true
        }
        return false
        // return (value === true || value === false)
    },

    titleCase: (string)=>{
        let stringArray = string.toLowerCase().split(" ")
        let newArray = stringArray.map(word=>word[0].toUpperCase() + word.substring(1))
        return newArray.join(" ")
    },




}
