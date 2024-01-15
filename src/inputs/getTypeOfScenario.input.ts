import prompts from 'prompts'
import { lineBreak } from '../decorators'
import type { Scenario } from '../types'
import type { Choices, Prompts } from './types'

export async function getTypeOfScenario(): Promise<Scenario | undefined> {
	await lineBreak()

	const { scenario }: Prompts<'scenario', Scenario> = await prompts({
		name: 'scenario',
		type: 'select',
		message: 'Seleccione el tipo de escenario:',
		choices: [
			{
				title: 'Misión (campaña)',
				value: 'campaign-mission',
			},
			{
				title: 'Misión (zeus)',
				value: 'zeus-mission',
			},
			{
				title: 'Mapa de entrenamiento',
				value: 'training-map',
			},
		] as Choices<Scenario>,
	})

	return scenario
}
