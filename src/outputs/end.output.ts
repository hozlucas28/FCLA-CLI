import { text } from './text.output'

export async function end(code: 0 | 1): Promise<void> {
	await text({ message: 'CLI finalizado', color: 'gray' })
	process.exit(code)
}
