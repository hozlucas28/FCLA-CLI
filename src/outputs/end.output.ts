import { text } from './text.output'

export async function end(): Promise<void> {
	await text({ message: 'CLI finalizado', color: 'gray' })
	process.exit()
}
