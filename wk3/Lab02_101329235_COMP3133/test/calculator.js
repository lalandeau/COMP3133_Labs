const chai = require('chai')
const expect = chai.expect

const calculator = require('../app/calculator')

describe('Calculator - Sample Test Case', () => {
	describe('add', () => {
		it('add(5, 2) expected result 7', () => {
			expect(calculator.add(5, 2)).to.equal(7)
		})
        it('add(5, 2) expected result 7', () => {
			expect(calculator.add(5, 2)).to.equal(8)
		})
	})

	describe('mul', () => {
		it('mul(5, 2) expected result 10', () => {
			expect(calculator.mul(5, 2)).to.equal(10)
		})
		it('mul(5, 2) expected result 10', () => {
			expect(calculator.mul(5, 2)).to.equal(12)
		})
	})

	describe('sub', () => {
		it('sub(5, 2) expected result 3', () => {
			expect(calculator.sub(5, 2)).to.equal(3)
		})
		it('sub(5, 2) expected result 3', () => {
			expect(calculator.sub(5, 2)).to.equal(5)
		})
	})

	describe('div', () => {
		it('div(10, 2) expected result 5', () => {
			expect(calculator.div(10, 2)).to.equal(5)
		})
		it('div(10, 2) expected result 5', () => {
			expect(calculator.div(10, 2)).to.equal(2)
		})
	})
})