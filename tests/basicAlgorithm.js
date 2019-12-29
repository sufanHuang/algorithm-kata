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
            let value = chance.string()
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
});
