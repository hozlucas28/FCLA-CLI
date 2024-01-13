import { text } from './text.output'

export async function intro(message = '¡Bienvenido al CLI de FCLA!'): Promise<void> {
	await text({ message, color: 'gray' })
}
