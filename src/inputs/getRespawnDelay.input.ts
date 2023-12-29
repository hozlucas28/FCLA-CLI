import prompts from 'prompts'
import { lineBreak } from '../decorators'
import type { Prompts } from './types'

export async function getRespawnDelay(): Promise<number | undefined> {
	await lineBreak()

	const { delay }: Prompts<'delay', number> = await prompts({
		type: 'number',
		name: 'delay',
		message: 'Tiempo de espera para reaparecer (en segundos)',
		initial: 120,
		min: 0,
		max: 300,
	})

	return delay
}
