import isValid from './credit-card-number'

describe('validating credit card numbers', () => {
    describe('luhn', () => {
        it('should only contian numbers', () => {
            expect(isValid("ABC")).toBeFalsy()
        })
    })
})