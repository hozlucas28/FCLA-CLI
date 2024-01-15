import { formatStr } from '../../../utils/formatStr.util'

describe('Unit testing of formatStr()', () => {
	it('Should trim a string', () => {
		const received = formatStr({ str: ' hello ' })
		expect(received).toBe('hello')
	})

	it('Should remove extra spaces from a string', () => {
		const received = formatStr({ str: 'hello  world' })
		expect(received).toBe('hello world')
	})

	it('Should capitalize first letter of a string', () => {
		const received = formatStr({ str: 'hello', capitalize: true })
		expect(received).toBe('Hello')
	})

	it('Should not capitalize first letter of a string', () => {
		const received = formatStr({ str: 'hello', capitalize: false })
		expect(received).toBe('hello')
	})
})
