import prompts from 'prompts'
import { lineBreak } from '../decorators'
import type { Choices, Prompts } from './types'

export async function animatedIntro(): Promise<boolean | undefined> {
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

	const { intro }: Prompts<'intro', boolean> = await prompts({
		choices,
		initial: 0,
		message: '¿Desea que el escenario tenga una introducción animada?',
		name: 'intro',
		type: 'select',
	})

	return intro
}
