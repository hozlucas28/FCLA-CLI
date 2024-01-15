import { validateInput } from '../../../validations/validateInput'

describe('Unit testing of validateInput()', () => {
	it('Should return an invalid message', () => {
		// @ts-expect-error
		const received = validateInput(123)
		const expected = 'El campo debe ser una cadena de caracteres.'
		expect(received).toBe(expected)
	})

	it('Should return an invalid message', () => {
		const received = validateInput('')
		const expected = 'El campo no puede estar vacío.'
		expect(received).toBe(expected)
	})

	it('Should return an invalid message', () => {
		const received = validateInput('¡{Hello} "World!')
		const expected = 'Los siguientes caracteres no estan permitidos: { } "'
		expect(received).toBe(expected)
	})

	it('Should return true', () => {
		const received = validateInput('abc')
		expect(received).toBe(true)
	})
})
