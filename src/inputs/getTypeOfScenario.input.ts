import prompts from 'prompts'
import type { Scenario } from '../types'
import type { Choices, Prompts } from './types'

export async function getTypeOfScenario(): Promise<Scenario | undefined> {
	const { scenario }: Prompts<'scenario', Scenario> = await prompts({
		name: 'scenario',
		type: 'select',
		message: 'Seleccione el tipo de escenario:',
		choices: [
			{
				title: 'Misión (zeus)',
				value: 'zeus-mission',
			},
			{
				title: 'Misión (campaña)',
				value: 'campaign-mission',
			},
			{
				title: 'Mapa de entrenamiento',
				value: 'training-map',
			},
		] as Choices<Scenario>,
	})

	return scenario
}

getTypeOfScenario()
