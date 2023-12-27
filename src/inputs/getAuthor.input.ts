import prompts from 'prompts'
import { lineBreak } from '../decorators'
import { formatStr } from '../utils'
import { validateInput } from '../validations'
import type { Prompts } from './types'

export async function getAuthor(): Promise<string | undefined> {
	await lineBreak()

	const { author }: Prompts<'author', string> = await prompts({
		type: 'text',
		name: 'author',
		message: 'Autor',
		format: (str: string) => formatStr({ str, capitalize: false }),
		validate: (str: string) => validateInput(str),
	})

	return author
}
