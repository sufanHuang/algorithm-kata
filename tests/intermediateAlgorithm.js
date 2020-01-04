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
            console.log(providedArray)
            _.each(providedArray,(value)=>{
                console.log(value)
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
            console.log(providedArray)
            _.each(providedArray, (value)=>{
                console.log(value)
                let result = api.whatIsInAName(value[0],value[1])
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
            console.log(providedArray)
            _.each(providedArray, (value)=>{
                console.log(value)
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
            console.log(providedArray)
            _.each(providedArray, (value)=>{
                console.log(value)
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
            console.log(providedArray)
            _.each(providedArray, (value)=>{
                console.log(value)
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
            console.log(providedArray)
            _.each(providedArray, (value)=>{
                console.log(value)
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
            console.log(providedArray)
            _.each(providedArray, (value)=>{
                console.log(value)
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
            console.log(providedArray)
            _.each(providedArray, (value)=>{
                console.log(value)
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
            console.log(providedArray)
            _.each(providedArray, (value)=>{
                console.log(value)
                let result = api.convertHTML(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

    describe('sumFibs  functionality', () => {

        it('should ', ()=>{
            let knowMapping = {
                "Dolce & Gabbana": 'Dolce &amp; Gabbana',
                "<>": '&lt;&gt;',
                "Hamburgers < Pizza < Tacos": 'Hamburgers &lt; Pizza &lt; Tacos'
            }
            let providedArray = _.keys(knowMapping)
            console.log(providedArray)
            _.each(providedArray, (value)=>{
                console.log(value)
                let result = api.convertHTML(value)
                expect(result).to.deep.equal(knowMapping[value])
            })
        })
    })

});
