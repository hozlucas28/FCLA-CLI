type ValidValidation = {
	isValid: true
}

type InvalidValidation = {
	isValid: false
	invalidMsg: string
}

export type ValidationReturn<T extends 'valid' | 'invalid' | 'any' = 'any'> = T extends 'valid'
	? ValidValidation
	: T extends 'invalid'
	  ? InvalidValidation
	  : ValidValidation | InvalidValidation
