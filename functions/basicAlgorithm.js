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

    frankenSplice: (arr1,arr2,n)=>{
        return arr2.slice(0,n).concat(arr1).concat(arr2.slice(n))
    },

    bouncer: (arr)=>{
        let newArr = []
        arr.map( item => {
            if(item){
                newArr.push(item)
            }
            })
        return newArr
    },

    getIndexToIns: (arr, num)=>{
        let newArray = []
        let sortedArray = arr.sort()
        sortedArray.map(currentNumber=>{
            if(num-currentNumber>0){
                newArray.push(currentNumber)
            }
        })
        return newArray.length
    },

    mutation: (arr)=>{
        // let whole= arr[0].toLowerCase()
        // let part = arr[1].toLowerCase()
        // for (i=0;i<part.length;i++) {
        //     if (whole.indexOf(part[i]) < 0)
        //         return false;
        // }
        // return true;
        let test = arr[1].toLowerCase().split('')
        let target = arr[0].toLowerCase()
        test.every((letter)=>{
            if(target.indexOf(letter)<0){
                return false
            }
        })
        return true
    },

    chunkArrayInGroups: (arr, size)=>{
        let result = []

        for(let i = 0; i<arr.length; i+size){
            result.push(arr.splice(0,size))
        }

        return result

    }


}
