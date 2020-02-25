const expect = require('chai').expect
const Chance = require('chance')
const _ = require('lodash')

const chance = new Chance
const modulePath = '../functions/basicAlgorithm'

describe('basicAlgorithm functionality', () => {

    let api = require(modulePath)

    describe('convertCelsiusToFahrenheit functionality', () => {

        it('should return a number', () => {
            let value = chance.integer()
            let result = api.convertCelsiusToFahrenheit(value)

            expect(_.isNumber(result)).to.be.true
        });

        it('should convert celsius to fahrenheit', () => {
            let knownMapping = {
                '20': 68,
                '10': 50,
                '0': 32,
                '-30': -22,
                '30': 86
            }

            let celciusValues = _.keys(knownMapping)
            _.each(celciusValues, (value) => {
                let result = api.convertCelsiusToFahrenheit(parseInt(value))
                expect(result).to.equal(knownMapping[value])
            })
        })
    });

    describe('reverseString functionality', () => {

        it('should return a string', () => {
            let value = chance.word()
            let result = api.reverseString(value)

            expect(_.isString(result)).to.be.true
        });

        it('should reverse string', () => {
            let knownMapping = {
                'hello': 'olleh',
                'Howdy': 'ydwoH',
                'Greetings from Earth': 'htraE morf sgniteerG',
            }

            let stringOrigins = _.keys(knownMapping)
            _.each(stringOrigins, (string) => {
                let result = api.reverseString(string)
                expect(result).to.equal(knownMapping[string])
            })
        })
    });

    describe('factorializeNumber functionality', () => {

        it('should return a number', () => {
            let value = chance.integer()
            let result = api.factorializeNumber(value)

            expect(_.isNumber(result)).to.be.true
        });

        it('should return the factorial of the provided integer', () => {
            let knownMapping = {
                '5': 120,
                '10': 3628800,
                '20': 2432902008176640000,
                '0': 1
            }

            let providedIntegers = _.keys(knownMapping)
            _.each(providedIntegers, (value) => {
                let result = api.factorializeNumber(value)
                expect(result).to.equal(knownMapping[value])
            })
        })
    });

    describe('findLongestWordLength functionality', () => {

        it('should return a number', () => {
            let value = chance.word()
            let result = api.findLongestWordLength(value)

            expect(_.isNumber(result)).to.be.true
        });

        it('should return the length of the longest word in the provided sentence', () => {
            let knownMapping = {
                'The quick brown fox jumped over the lazy dog': 6,
                'May the force be with you': 5,
                'Google do a barrel roll': 6,
                'What is the average airspeed velocity of an unladen swallow': 8,
                'What if we try a super-long word such as otorhinolaryngology': 19
            }

            let providedStrings = _.keys(knownMapping)
            _.each(providedStrings, (value) => {
                let result = api.findLongestWordLength(value)
                expect(result).to.equal(knownMapping[value])
            })
        })
    });

    describe('largestOfFour functionality', () => {

        it('should return an array consisting of the largest number from each provided subarray', () => {

            let knowMapping = [
                {
                    arrayOfFour: [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]],
                    result: [27, 5, 39, 1001]
                },
                {
                    arrayOfFour: [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]],
                    result: [9, 35, 97, 1000000]
                },
                {
                    arrayOfFour: [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]],
                    result: [25, 48, 21, -3]
                }
            ]

            _.each(knowMapping, (value) => {
                let result = api.largestOfFour(value.arrayOfFour)
                expect(result).to.deep.equal(value.result)
            })
        })
    });

    describe('confirmEnding functionality', () => {

        it( 'should check if a string ends with the given target string', ()=>{
            let knowMapping = [
                {
                    string: 'Bastian',
                    target: 'n',
                    result: true
                },
                {
                    string: 'Congratulation',
                    target: 'on',
                    result: true
                },
                {
                    string: '"Walking on water and developing software from a specification are easy if both are frozen", "specification"',
                    target: [],
                    result: false
                },
                {
                    string: 'Open sesame',
                    target: 'pen',
                    result: false
                }
            ]

            _.each(knowMapping, (value)=>{
                let result = api.confirmEnding(value.string, value.target)
                expect(result).to.deep.equal(value.result)
            })
        })
    });

    describe('repeatString functionality', () => {

        it( 'should repeat a given string for a number of times', ()=>{
            let knowMapping = [
                {
                    string: '*',
                    number: 3,
                    result: '***'
                },
                {
                    string: 'abc',
                    number: 4,
                    result: 'abcabcabcabc'
                },
                {
                    string: 'abc',
                    number: -2,
                    result: ''
                }
            ]

            _.each(knowMapping, (value)=>{
                let result = api.repeatString(value.string, value.number)
                expect(result).to.deep.equal(value.result)
            })
        })
    });

    describe('truncateString functionality', () => {

        it( 'should truncate a string if it is longer than the given length', ()=>{
            let knowMapping = [
                {
                    string: "A-tisket a-tasket A green and yellow basket",
                    number: 8,
                    result: "A-tisket..."
                },
                {
                    string: "A-tisket a-tasket A green and yellow basket",
                    number: "A-tisket a-tasket A green and yellow basket".length,
                    result: "A-tisket a-tasket A green and yellow basket"
                },
                {
                    string: "A-",
                    number: 1,
                    result: 'A...'
                }
            ]

            _.each(knowMapping, (value)=>{
                let result = api.truncateString(value.string, value.number)
                expect(result).to.deep.equal(value.result)
            })
        })
    });

    describe('finderKeepers functionality', () => {

        it( 'should look through an array and returns the first element that passes a truth test', ()=>{
            let knowMapping = [
                {
                    array: [1, 3, 5, 8, 9, 10],
                    func: function(num) { return num % 2 === 0},
                    result: 8
                },
                {
                    array: [1, 3, 5, 9],
                    func: function(num) { return num % 2 === 0}
                }

            ]

            _.each(knowMapping, (value)=>{
                let result = api.findersKeepers(value.array, value.func)
                expect(result).to.deep.equal(value.result)
            })
        })
    });

    describe('booWho functionality', () => {

        it('should check if a value is classified as a boolean primitive', ()=>{
            let knowMapping = {
                'true': true,
                'false': true,
                '[1,2,3]': false,
                '"true"': false
            }

            let providedArray = _.keys(knowMapping)
            _.each(providedArray,(value)=>{
                let result = api.booWho(JSON.parse(value))
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    });

    describe('titleCase functionality', () => {

        it('should return a string', ()=>{
            let value = chance.sentence()
            let result = api.titleCase(value)
            expect(_.isString(result)).to.be.true
        })

        it('should return a string with the first letter of each word capitalized',()=>{
            let knowMapping = {
                '"I am a little tea pot"': "I Am A Little Tea Pot",
                '"sHoRt AnD sToUt"': "Short And Stout",
                '"HERE IS MY HANDLE HERE IS MY SPOUT"': 'Here Is My Handle Here Is My Spout'
            }
            let providedArray = _.keys(knowMapping)
            _.each(providedArray,(value)=>{
                let result = api.titleCase(JSON.parse(value))
                expect(result).to.deep.equal(knowMapping[value])
            })

        })
    });

    describe('frankenSplice functionality', () => {

        it('should copy each element of first array into second array, in order', ()=>{
            let knowMapping = [
                {
                    arr1: [1,2,3],
                    arr2: [4,5],
                    number: 1,
                    result: [4,1,2,3,5]
                },
                {
                    arr1: [1,2],
                    arr2: ['a', 'b'],
                    number: 1,
                    result: ['a',1,2,'b']
                },
                {
                    arr1: ["claw", "tentacle"],
                    arr2: ["head", "shoulders", "knees", "toes"],
                    number: 2,
                    result: ["head", "shoulders","claw", "tentacle", "knees", "toes"]
                }
            ]

           _.each(knowMapping,(value)=>{
                let result = api.frankenSplice(value.arr1, value.arr2, value.number)
                expect(result).to.deep.equal(value.result)
            })
        })
    });

    describe('bouncer functionality', () => {

        it('should remove all falsy values from an array', ()=>{
            let knowMapping = [
                {
                    arr: [7, "ate", "", false, 9],
                    result: [7, "ate", 9]
                },
                {
                    arr: ["a", "b", "c"],
                    result: ["a", "b", "c"]
                },
                {
                    arr: [false, null, 0, NaN, undefined, ""],
                    result: []
                },
                {
                    arr: [null, NaN, 1, 2, undefined],
                    result: [1,2]
                }
            ]

            _.each(knowMapping,(value)=>{
                let result = api.bouncer(value.arr)
                expect(result).to.deep.equal(value.result)
            })
        })
    });

    describe('getIndexToIns functionality', () => {

        it('should return a number',()=>{
            let knowArray = [10, 20, 30, 40, 50]
            let randomNumber = chance.integer()
            let result = api.getIndexToIns(knowArray,randomNumber)
            expect(_.isNumber(result)).to.be.true
        })

        it('should return the lowest index when a value is inserted into an array after it is sorted',()=>{

            let knowMapping = [
                {
                    arr: [10, 20, 30, 40, 50],
                    number: 35,
                    result: 3
                },
                {
                    arr: [10, 20, 30, 40, 50],
                    number: 30,
                    result: 2
                },
                {
                    arr: [2, 5, 10],
                    number: 15,
                    result: 3
                }

            ]

            _.each(knowMapping,(value)=>{
                let result = api.getIndexToIns(value.arr, value.number)
                expect(result).to.deep.equal(value.result)
            })
        })
    });

    describe('mutation functionality', () => {

        it('should return true if the first string in the array consists all the elements of second string',()=>{

            let knowMapping = [
                {
                    arr: ["hello", "hey"],
                    result: false
                },
                {
                    arr: ["hello", "Hello"],
                    result: true
                },
                {
                    arr: ["Alien", "line"],
                    result: true
                }
            ]

            _.each(knowMapping, (value)=>{
                let result = api.mutation(value.arr)
                expect(result).to.deep.equal(value.result)
            })
        })
    });

    describe('chunkArrayInGroups', () => {

        it('should split the array into several sub array of a given length',()=>{

            let knowMapping = [
                {
                    arr: ["a", "b", "c", "d"],
                    size: 2,
                    result: [["a", "b"], ["c", "d"]]
                },
                {
                    arr: [0, 1, 2, 3, 4, 5],
                    size: 3,
                    result: [[0, 1, 2], [3, 4, 5]]
                },
                {
                    arr: [0, 1, 2, 3, 4, 5],
                    size: 4,
                    result: [[0, 1, 2, 3], [4, 5]]
                }
            ]

            _.each(knowMapping,(value)=>{
                let result = api.chunkArrayInGroups(value.arr, value.size)
                expect(result).to.deep.equal(value.result)
            })
        })
    });


})

