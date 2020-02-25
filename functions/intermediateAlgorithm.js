const _ = require('lodash')

module.exports = {

    sumAll: (arr) =>{
        let result = 0
        let sortedArr = arr.sort((a,b)=>a-b)
        for(let i= sortedArr[0]; i<=sortedArr[1]; i++){
            result +=i
        }
        return result
    },

    diffArray: (arr1, arr2)=>{
        let result = []
        arr1.map(item=>{
            if(arr2.indexOf(item)== -1){
                result.push(item)
            }
        })
        arr2.map(item=>{
            if(arr1.indexOf(item)== -1){
                result.push(item)
            }
        })

        return result
    },

    destroyer: (arr)=>{
        let argumentArray = Array.from(arguments)
        let result = argumentArray.shift().filter(value=>{
            if( argumentArray.indexOf(value) <0){
                return true
            }
        })
        return result
    },


    something: (items, ...options) => {
        console.log('Got total length of items', _.size(items))
        console.log('And we have so many options...', JSON.stringify(options))
    },

    whatIsInAName: (collection, source) =>{
        return _.filter(collection, (item) => {
            _.keys(source)._.each(sourceKey=> item.hasOwnProperty(sourceKey)&& item(sourceKey) == source[sourceKey])
        })
    },

    spinalCase: (str)=>{
        return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase()
    },

    translatePigLatin: (str)=>{
        let index = str.search(/[aieou]/)

        if(index == 0){
            return str + 'way'
        }
        if(index == -1){
            return str + 'ay'
        }

        return str.slice(index) + str.substring(0,index) + 'ay'
    },

    myReplace: (str, before, after)=>{

        if(/^[A-Z]/.test(before)){
            after = after[0].toUpperCase() + after.substr(1)
        }else{
            after = after[0].toLowerCase() + after.substr(1)
        }
        return str.replace(before, after)
    },

    pairElement: (str)=>{
        let strArray = str.split('')
        return strArray.map(item =>{
            switch(item){
                case "G":
                    return ['G', 'C']
                    break;
                case "C":
                    return ['C','G']
                    break;
                case "T":
                    return ['T','A']
                    break;
                case "A":
                    return ['A','T']
                    break;
            }
        })
    },

    fearNotLetter: (str)=>{
        for(let i = 0; i<str.length;i++){
            if(str.charCodeAt(i)!== str.charCodeAt(0)+i){
                return String.fromCharCode(str.charCodeAt(i)-1)
            }
        }
        return undefined
    },

    unitedUnique: (...items)=>{
        let allNumbers = _.flattenDeep(items)

        let result = _.reduce(allNumbers, (result, currentNumber) => {
            if(!result.includes(currentNumber)) {
                result.push(currentNumber)
            }
            return result
        }, [])

        return result
    },
    // how to debugger this function

    convertHTML: (str)=>{
        let htmlMapping = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
        }

        return str.split('').map(character=>htmlMapping[character]||character).join('')
     },

    sumFibs: (num)=>{
        if(num < 0) return -1
        if(num === 0 || num === 1) return 1

        let fibArray = [1,1]
        let nextFib

        while( (nextFib = fibArray[0] + fibArray[1]) <= num){
            fibArray.unshift(nextFib)
        }
        return fibArray.filter( item => item % 2 !=0).reduce((total,current)=>total + current)

    },

    sumPrimes: (num)=>{

        if(num === 1) return 0

        let primeArray = []

        let isPrime = (number)=>{
            for(let i=2; i<=number; i++){
                if(number % i === 0 && number !=i){
                    return false
                }
            }
            return true
        }

        for(let i =2; i <=num; i++){
            if (isPrime(i)){
                primeArray.push(i)
            }
        }

        return _.reduce(primeArray, (total,current)=>total + current)
    },

    smallestCommons: (arr)=>{
        let max = Math.max(...arr)
        let min = Math.min(...arr)
        let result = max

        for (let i = max; i>=min; i--){
            if(result % i !== 0){
                result += max
                i = max
            }
        }
        return result
    },

    dropElements: (arr,func)=>{
        let count = 0
        while(!func(arr[count])){
            arr.shift()
        }
        return arr
    },

    steamrollArray: (arr)=>{
       return  _.flattenDeep(arr)
    },

    binaryAgent: (str)=>{
        //charCodeAt() string to UTF code
        //fromCharCode() UTF code to string
        // binary to UTF?
        // parseInt binary to decimal
        let strArray = str.split(" ")
        let convertedArray = strArray.map(item=>String.fromCharCode(parseInt(item,2)))
        return convertedArray.join('')
    },

    truthCheck: (collection, predicate)=>{
        return collection.every(item=>item[predicate])
    },

    addTogether: (a,b)=>{
        if (!_.isNumber(a)||!_.isNumber(b)){
            return undefined
        }
        if(b){
            return a+b
        }

        return c => addTogether(a,c)
    },

    orbitalPeriod: (arr)=>{
        let GM = 398600.4418
        let earthRadius = 6367.4447

        return arr.map((item) => {
           return {
               name: item.name,
               orbitalPeriod: Math.round((2 * Math.PI) * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM))
           }
        })
    },

    palindrome: (str)=>{
        let strArray = str.toLowerCase().split('').filter(letter=>letter.match(/[a-z]/))
        let reversedArray = [...strArray].reverse()
        return _.isEqual(strArray, reversedArray)
    },

    canMakeWord: (tiles, word)=>{
        let wordArray = word.split('')
        let tilesLetters = tiles.slice()
        let doWork = (letters, currentLetter) => {
            if(tilesLetters.includes(currentLetter)){
                tilesLetters.splice(tilesLetters.indexOf(currentLetter),1)
            }else{
                letters.push(currentLetter)
            }

            return letters
        }

        let filteredLetters = _.reduce(wordArray, doWork, [])
        let numberOfWildCards = tilesLetters.filter(letter=> letter ==="?").length

        if(filteredLetters.length = 0 || (filteredLetters.length <= numberOfWildCards )){
            return true
        }
        return false
    },

    convertToRoman: (num)=>{
        let knowPairs = { M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
        let result = ''
        for( let key in knowPairs){
            while (num >= knowPairs[key]){
                result += key
                num -= knowPairs[key]
            }
        }
        return result
    },

    rot13: (str)=>{
     return str.replace(/[A-Z]/g, letter=>
         String.fromCharCode((letter.charCodeAt(0)%26) + 65)
     )},

    telephoneCheck: (str)=>{
        let pattern = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/
        return pattern.test(str)

    },

    checkCashRegister: (price, cash, cashInDrawer)=>{
        let knowPairs = { 'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'DOLLAR': 1,
                           'QUARTER': 0.25, 'DIME':  0.1, 'NICKEL': 0.05, 'PENNY': 0.01 }
        let changeTotal = cash - price
        let change = []

        for ( let key in knowPairs){
            while (changeTotal >= knowPairs[key]){
                change.push([key, ])

            }
        }


    },

    getTypeCount: (data, types) =>{
        let counts = _.reduce(data, (totals, currentItem) => {
            let { type } = currentItem
            totals[type] = _.get(totals, type, 0) + 1
            return totals
        }, {})

        return _.map(types, currentType => counts[currentType])
    },

    getTypes : (data)=>{
        let types = []
        data.forEach(item => {
            if(!types.includes(item.type)){
                types.push(item.type)
            }
        })
       return types
    },

    shuffledItems: (data) => {
        let shuffledItems = []
        let trueOrFalse = ()=>{
            let randomNumber = Math.random()
            if (randomNumber > 0.5){
                return true
            }else{
                return false
            }
        }

        data.forEach(item=>{
            if(trueOrFalse()){
                shuffledItems.push(item)
            }else{
                shuffledItems.unshift(item)
            }

        })
        return shuffledItems
    }


}





