import { invalidReturn, validReturn } from './_utilities'
import type { ValidationReturn } from './types'

export function validateStr(str: string): ValidationReturn {
	if (typeof str !== 'string') {
		invalidReturn.invalidMsg = 'El campo debe ser una cadena de caracteres.'
		return invalidReturn
	}

	if (str.length === 0) {
		invalidReturn.invalidMsg = 'El campo no puede estar vacío.'
		return invalidReturn
	}

	const invalidChars = str.match(/[^a-zñA-ZÑà-üÀ-Ü,.+\-%#$'°¡!¿?()[\]\d ]/g)
	if (invalidChars) {
		const uniqueChars = [...new Set(invalidChars)].join(' ')
		invalidReturn.invalidMsg = `Los siguientes caracteres no estan permitidos: ${uniqueChars}`
		return invalidReturn
	}

	return validReturn
}
