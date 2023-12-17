import { validateStr } from './validateStr'

export function validateInput(str: string): string | boolean {
	const validation = validateStr(str)
	if (validation.isValid) return true

	return validation.invalidMsg
}
