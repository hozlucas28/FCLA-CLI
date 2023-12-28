import prompts from 'prompts'
import { lineBreak } from '../decorators'
import { formatStr } from '../utils'
import { validateInput } from '../validations'
import type { Prompts } from './types'

export async function getScenarioDesc(): Promise<string | undefined> {
	await lineBreak()

	const { description }: Prompts<'description', string> = await prompts({
		name: 'description',
		type: 'text',
		message: 'Ingrese la descripción del escenario:',
		format: (str: string) => formatStr({ str, capitalize: false }),
		validate: (str: string) => validateInput(str),
	})

	return description
}
