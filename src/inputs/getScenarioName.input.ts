import prompts from 'prompts'
import { lineBreak } from '../decorators'
import { formatStr } from '../utils'
import { validateInput } from '../validations'
import type { Prompts } from './types'

export async function getScenarioName(): Promise<string | undefined> {
	await lineBreak()

	const { scenario }: Prompts<'scenario', string> = await prompts({
		name: 'scenario',
		type: 'text',
		message: 'Ingrese el nombre del escenario:',
		format: (str: string) => formatStr({ str, capitalize: false }),
		validate: (str: string) => validateInput(str),
	})

	return scenario
}
