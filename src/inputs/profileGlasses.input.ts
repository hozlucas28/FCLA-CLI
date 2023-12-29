import prompts from 'prompts'
import { lineBreak } from '../decorators'
import type { Prompts } from './types'

export async function profileGlasses(): Promise<boolean | undefined> {
	await lineBreak()

	const { glasses }: Prompts<'glasses', boolean> = await prompts({
		name: 'glasses',
		type: 'confirm',
		message: '¿Desea que los jugadores aparezcan con sus propias gafas?',
		initial: true,
	})

	return glasses
}

profileGlasses()
