const expect = require('chai').expect
const Chance = require('chance')
const _ = require('lodash')

const chance = new Chance
const modulePath = '../functions/intermediateAlgorithm'

describe('intermediateAlgorithm functionality', () => {

    let api = require(modulePath)

    describe('sumAll functionality', () => {

        it('should return the sum of two numbers in an array and the numbers between them',()=>{
            let knowMapping = {
                '[1,4]': 10,
                '[4,1]': 10,
                '[5,10]': 45
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.sumAll(JSON.parse(value))
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    });

    describe('diffArray functionality', () => {

        it('should return a new array consists with items that only exists in one of the arrays',()=>{
            let knowMapping = {
                '[[1, 2, 3, 5], [1, 2, 3, 4, 5]]': [4],
                '[["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]]': ["pink wool"],
                '[["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] ]': [],
                '[[], ["snuffleupagus", "cookie monster", "elmo"]]': ["snuffleupagus", "cookie monster", "elmo"]
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray,(value)=>{
                let result = api.diffArray(JSON.parse(value)[0],JSON.parse(value)[1])
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    });

    describe('destroyer functionality', () => {

        it('should remove items in an array that is the same value of the given arguments', ()=>{
            let knowMapping = {
                '[1, 2, 3, 1, 2, 3], 2, 3': [1, 1],
                '[3, 5, 1, 2, 2], 2, 3, 5': [1],
                //'[["tree", "hamburger", 53], "tree", 53]': ["hamburger"]
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.destroyer(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    });

    describe('something functionality', () => {
        it('should do some stuff', () => {
            let items = chance.n(chance.d10, chance.d10())
            api.something(items, chance.word(), chance.word(), chance.word())
        });
    });

    describe('whatIsInAName  functionality', () => {

        it('should remove items in an array that is the same value of the given arguments', ()=>{
            let knowMapping = {
                '[[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }]': [{ first: "Tybalt", last: "Capulet" }],
                '[[{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}]': []
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.whatIsInAName(JSON.parse(value)[0],JSON.parse(value)[1])
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('spinalCase  functionality', () => {

        it('should return a string connected by "-"', ()=>{
            let knowMapping = {
                "This Is Spinal Tap": "this-is-spinal-tap",
                "thisIsSpinalTap": "this-is-spinal-tap"
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.spinalCase(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('translatePigLatin  functionality', () => {

        it('should transform the ending of the string', ()=>{
            let knowMapping = {
                "california": "aliforniacay",
                "eight": "eightway",
                'rhythm': "rhythmay"
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.translatePigLatin(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('myReplace  functionality', () => {

        it('should search a word and replace with a given one', ()=>{
            let knowMapping = {
                '["Let us go to the store", "store", "mall"]': "Let us go to the mall",
                '["He is Sleeping on the couch", "Sleeping", "sitting"]': "He is Sitting on the couch"

            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.myReplace(JSON.parse(value)[0],JSON.parse(value)[1], JSON.parse(value)[2])
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('pairElement  functionality', () => {

        it('should return a 2d array with each paring elements', ()=>{
            let knowMapping = {
                'GCG': [["G", "C"], ["C","G"],["G", "C"]],
                "TTGAG": [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]

            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.pairElement(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('fearNotLetter  functionality', () => {

        it('should find the missing letter in the passed letter range and return it', ()=>{
            let knowMapping = {
                "abce": "d",
                "abcdefghjklmno": "i"

            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.fearNotLetter(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('unitedUnique  functionality', () => {

        it('should return an array with all the unique values in order', ()=>{
            let knowMapping = {
                "[[1, 3, 2], [5, 2, 1, 4], [2, 1]]": [1, 3, 2, 5, 4],
                "[[1, 2, 3], [5, 2, 1]]": [1, 2, 3, 5]
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.unitedUnique(JSON.parse(value))
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('convertHTML  functionality', () => {

        it('should convert special characters in a string to their corresponding HTML entities', ()=>{
            let knowMapping = {
                "Dolce & Gabbana": 'Dolce &amp; Gabbana',
                "<>": '&lt;&gt;',
                "Hamburgers < Pizza < Tacos": 'Hamburgers &lt; Pizza &lt; Tacos'
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.convertHTML(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('sumFibs  functionality', () => {

        it('should return the sum of all odd Fibonacci numbers that are less or equal to a given number', ()=>{
            let knowMapping = {
                "1000": 1785,
                "4000000": 4613732,
                "75025": 135721
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.sumFibs(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('sumPrimes  functionality', () => {

        it('should return the sum of prime numbers that are less or equal than a given integer', ()=>{
            let knowMapping = {
                "10": 17,
                "977": 73156
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.sumPrimes(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('smallestCommons  functionality', () => {

        it('should return the smallest common multiple of the provided parameters and the numbers between them', ()=>{
            let knowMapping = {
                "[1, 5]": 60,
                "[5, 1]": 60,
                "[23, 18]": 6056820
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.smallestCommons(JSON.parse(value))
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('dropElements  functionality', () => {

        it('should return a new array with elements from first parameter that pass the function parameter', ()=>{
            let knowMapping = {
                "[[1, 2, 3, 4], function(n) {return n >= 3;}]": [3, 4],
                "[[1, 2, 3, 9, 2], function(n) {return n > 2;}]": [3, 9, 2],
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.dropElements(JSON.parse(value)[0], JSON.parse(value)[1])
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('streamrollArray  functionality', () => {

        it('should flatten a nested array', ()=>{
            let knowMapping = {
                "[1, [2], [3, [[4]]]]": [1, 2, 3, 4],
                "[1, [], [3, [[4]]]]": [1, 3, 4]
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.steamrollArray(JSON.parse(value))
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('binaryAgent  functionality', () => {

        it('should convert binary to corresponding letter', ()=>{
            let knowMapping = {
                "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111": "Aren't bonfires fun!?",
                "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001": "I love FreeCodeCamp!"
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.binaryAgent(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('truthCheck  functionality', () => {

        it('should check if the predicate is truthy on all elements of a collection', ()=>{
            let knowMapping = {
                '[[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"]': true,
                '[[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"]': false
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.truthCheck(JSON.parse(value)[0], JSON.parse(value)[1])
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('addTogether  functionality', () => {

        it('should return the sum of the arguments', ()=>{
            let knowMapping = {
                '[2,3]': 5,
                '[2,"3"]': undefined,
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.addTogether(JSON.parse(value)[0], JSON.parse(value)[1])
                expect(result).to.deep.equal(knowMapping[value])
            })
        })

        it('should return undefined with one argument only', ()=>{
            let knowMapping = {
                "http://bit.ly/IqT6zt": undefined,
                "2": undefined
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.addTogether(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })

       /* it('should return a function that expects one argument and returns the sum', ()=>{
            let knowMapping = {
                ""
            }
        }) */
    })

    describe('orbitalPeriod functionality', () => {

        it("should return a new array that transforms the elements' average altitude into orbital periods", ()=>{
            let knowMapping = {
                '[{name : "sputnik", avgAlt : 35873.5553}]': [{name: "sputnik", orbitalPeriod: 86400}],
                '[{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]': [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                console.log(value)
                let result = api.orbitalPeriod(JSON.parse(value))
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    });

    describe('palindrom functionality', () => {

        it("should return a new array that transforms the elements' average altitude into orbital periods", ()=>{
            let knowMapping = {
                "eye": true,
                "_eye": true,
                "almostomla": false,
                "five|\_/|four": false

            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                console.log(value)
                let result = api.palindrome(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    });

    describe('canMakeWord functionality', () => {

        it("should check if there is enough letters to make a word", ()=>{
            let knowMapping = [
                {
                    tiles: ['a', 'z', 'o', 'b', 't', '?'],
                    word: 'boat',
                    result: true
                },
                {
                    tiles: ['v', '?'],
                    word: 'beef',
                    result: false
                },
                {
                    tiles: ['v', '?','?','?',"?"],
                    word: 'beef',
                    result: true
                },
                {
                    tiles: ['a', 'f', 'e', 'h', 'b'],
                    word: 'beef',
                    result: false
                }
            ]
            _.each(knowMapping, (value)=>{
                let result = api.canMakeWord(value.tiles, value.word)
                expect(result).to.deep.equal(value.result)
            })
        })
    });

    describe('convertToRoman functionality', () => {

        it('should convert the given number into a roman numeral', ()=>{
            let knowMapping = {
                '2': "II",
                '16': "XVI",
                '500': 'D',
                '891': "DCCCXCI"
            }
            let keysArray = _.keys(knowMapping)
            _.each(keysArray, (value)=>{
                let result = api.convertToRoman(value)
                expect(result).to.deep.equal(knowMapping[value])
            })

        })
    });

    describe('rot13 functionality', () => {

        it('should return a decoded string where the values of the letters are shifted 13 places', ()=>{
            let knowMapping = {
                "SERR PBQR PNZC": "FREE CODE CAMP",
                "SERR CVMMN!": "FREE PIZZA!",
                "SERR YBIR?": "FREE LOVE?",
            }
            let keysArray = _.keys(knowMapping)
            _.each(keysArray, (value)=>{
                let result = api.rot13(value)
                expect(result).to.deep.equal(knowMapping[value])
            })

        })
    });

    describe('telephoneCheck functionality', () => {

        it('should return true if the passed string looks like a valid US phone number', ()=>{
            let knowMapping = {
                "1 555-555-5555": true,
                "1 (555) 555-5555": true,
                "5555555555": true,
                "555-5555": false
            }
            let keysArray = _.keys(knowMapping)
            _.each(keysArray, (value)=>{
                let result = api.telephoneCheck(value)
                expect(result).to.deep.equal(knowMapping[value])
            })

        })
    });

    describe('checkCashRegister functionality', () => {

        it('should return an object with cash register status and chang amount', ()=>{
            let knowMapping = [
                {
                    price: 19.5,
                    cash: 20,
                    caseInDrawer: [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]],
                    result: {status: "OPEN", change: [["QUARTER", 0.5]]}
                }
            ]
            _.each(knowMapping, (value)=>{
                let result = api.checkCashRegister(value.price, value.cash, value.cashInDrawer)
                expect(result).to.deep.equal(value.result)
            })
        })
    });

})
