import { text } from './text.output'

export async function intro(): Promise<void> {
	await text({ message: '¡Bienvenido al CLI de FCLA!', color: 'gray' })
}
