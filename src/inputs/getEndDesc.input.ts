import prompts from 'prompts'
import { lineBreak } from '../decorators'
import { formatStr } from '../utils'
import { validateInput } from '../validations'
import type { Prompts } from './types'

export async function getEndDesc(): Promise<string | undefined> {
	await lineBreak()

	const { description }: Prompts<'description', string> = await prompts({
		type: 'text',
		name: 'description',
		message: 'Descripción de fin de escenario',
		format: (str: string) => formatStr({ str, capitalize: false }),
		validate: (str: string) => validateInput(str),
	})

	return description
}
