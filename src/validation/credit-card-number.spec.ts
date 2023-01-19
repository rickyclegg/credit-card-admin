import isValid from './credit-card-number'

describe('validating credit card numbers', () => {
    describe('luhn', () => {
        it('should only contian numbers', () => {
            expect(isValid("ABC")).toBeFalsy()
        })

        it('should return false for an invalid number', () => {
            expect(isValid(6011329933655299)).toBeFalsy()
        })

        it('should allow a valid number as string', () => {
            expect(isValid('4485275742308327')).toBeTruthy()
        })

        it('should allow a valid number as number', () => {
            expect(isValid(4485275742308327)).toBeTruthy()
        })

        it('should allow a valid a formatted card number', () => {
            expect(isValid('4485 2757 4230 8327')).toBeTruthy()
        })
    })
})