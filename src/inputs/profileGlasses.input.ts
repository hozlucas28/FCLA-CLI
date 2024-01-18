import prompts from 'prompts'
import { lineBreak } from '../decorators'
import type { Choices, Prompts } from './types'

export async function profileGlasses(): Promise<boolean | undefined> {
	await lineBreak()

	const choices: Choices<true | false> = [
		{
			title: 'Sí',
			value: true,
		},
		{
			title: 'No',
			value: false,
		},
	]

	const { glasses }: Prompts<'glasses', boolean> = await prompts({
		choices,
		initial: 0,
		message: '¿Desea que los jugadores aparezcan con sus propias gafas?',
		name: 'glasses',
		type: 'select',
	})

	return glasses
}
