import { validateStr } from '../../../validations/validateStr'

describe('Unit testing of validateStr()', () => {
	it('Should return an invalid object', () => {
		// @ts-expect-error
		const received = validateStr(123)
		const expected = {
			isValid: false,
			invalidMsg: 'El campo debe ser una cadena de caracteres.',
		} satisfies typeof received

		expect(received).toMatchObject(expected)
	})

	it('Should return an invalid object', () => {
		const received = validateStr('')
		const expected = {
			isValid: false,
			invalidMsg: 'El campo no puede estar vacío.',
		} satisfies typeof received

		expect(received).toMatchObject(expected)
	})

	it('Should return an invalid object', () => {
		const received = validateStr('¡{Hello} "World!')
		const expected = {
			isValid: false,
			invalidMsg: 'Los siguientes caracteres no estan permitidos: { } "',
		} satisfies typeof received

		expect(received).toMatchObject(expected)
	})

	it('Should return a valid object', () => {
		const received = validateStr('abc')
		const expected = {
			isValid: true,
		} satisfies typeof received

		expect(received).toMatchObject(expected)
	})
})
