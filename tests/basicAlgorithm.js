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
            let knownMapping = {
                '[[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]': [27, 5, 39, 1001],
                '[[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]': [9, 35, 97, 1000000],
                '[[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]': [25, 48, 21, -3]
            }

            let providedArray = _.keys(knownMapping)
            _.each(providedArray, (value) => {
                let result = api.largestOfFour(JSON.parse(value))
                expect(result).to.deep.equal(knownMapping[value])
            })
        })
    });

    describe('confirmEnding functionality', () => {

        it( 'should check if a string ends with the given target string', ()=>{
            let knowMapping = {
                '["Bastian", "n"]': true,
                '["Congratulation", "on"]': true,
                '["Connor", "n"]': false,
                '["Walking on water and developing software from a specification are easy if both are frozen", "specification"]': false,
                '["Open sesame", "pen"]': false,
            }

            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.confirmEnding(JSON.parse(value)[0],JSON.parse(value)[1])
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    });

    describe('repeatString functionality', () => {

        it( 'should repeat a given string for a number of times', ()=>{
            let knowMapping = {
                '["*", 3]': '***',
                '["abc", 4]': 'abcabcabcabc',
                '["abc", -2]': ''
            }

            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.repeatString(JSON.parse(value)[0],JSON.parse(value)[1])
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    });

    describe('truncateString functionality', () => {

        it( 'should truncate a string if it is longer than the given length', ()=>{
            let knowMapping = {
                '["A-tisket a-tasket A green and yellow basket", 8]': "A-tisket...",
                '["A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length]': "A-tisket a-tasket A green and yellow basket",
                '["A-", 1]': 'A...'
            }

            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.truncateString(JSON.parse(value)[0],JSON.parse(value)[1])
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    });

    describe('finderKeepers functionality', () => {

        it( 'should look through an array and returns the first element that passes a truth test', ()=>{
            let knowMapping = {
                '[[1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0]': 8,
                '[[1, 3, 5, 9], function(num) { return num % 2 === 0]': undefined
            }

            let providedArray = _.keys(knowMapping)
            _.each(providedArray, (value)=>{
                let result = api.findersKeepers(JSON.parse(value)[0], JSON.parse(value)[1])
                expect(result).to.deep.equal(knowMapping[value])

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


})

