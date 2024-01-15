import { capitalizeStr } from '../../../utils/capitalizeStr.util'

describe('Unit testing of capitalizeStr()', () => {
	it('Should capitalize first letter of a string', () => {
		const received01 = capitalizeStr('hello')
		expect(received01).toBe('Hello')

		const received02 = capitalizeStr('HELLO')
		expect(received02).toBe('HELLO')

		const received03 = capitalizeStr('heLLo')
		expect(received03).toBe('HeLLo')

		const received04 = capitalizeStr('Hello')
		expect(received04).toBe('Hello')
	})
})
