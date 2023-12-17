import type { ValidationReturn } from './types'

export const validReturn: ValidationReturn<'valid'> = {
	isValid: true,
}

export const invalidReturn: ValidationReturn<'invalid'> = {
	isValid: false,
	invalidMsg: 'El campo es invalido.',
}
