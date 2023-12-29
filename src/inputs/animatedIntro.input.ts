import prompts from 'prompts'
import { lineBreak } from '../decorators'
import type { Prompts } from './types'

export async function animatedIntro(): Promise<boolean | undefined> {
	await lineBreak()

	const { intro }: Prompts<'intro', boolean> = await prompts({
		name: 'intro',
		type: 'confirm',
		message: '¿Desea que el escenario tenga una introducción animada?',
		initial: true,
	})

	return intro
}
