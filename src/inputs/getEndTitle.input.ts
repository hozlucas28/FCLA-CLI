import prompts from 'prompts'
import { lineBreak } from '../decorators'
import { formatStr } from '../utils'
import { validateInput } from '../validations'
import type { Prompts } from './types'

export async function getEndTitle(): Promise<string | undefined> {
	await lineBreak()

	const { title }: Prompts<'title', string> = await prompts({
		type: 'text',
		name: 'title',
		message: 'Título de fin de escenario',
		format: (str: string) => formatStr({ str, capitalize: false }),
		validate: (str: string) => validateInput(str),
	})

	return title
}
