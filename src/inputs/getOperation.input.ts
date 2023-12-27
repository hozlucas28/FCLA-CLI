import prompts from 'prompts'
import { lineBreak } from '../decorators'
import type { Operation } from '../types'
import type { Choices, Prompts } from './types'

export async function getOperation(): Promise<Operation | undefined> {
	await lineBreak()

	const { operation }: Prompts<'operation', Operation> = await prompts({
		type: 'select',
		name: 'operation',
		message: 'Seleccione la operación a ejecutar:',
		choices: [
			{
				title: 'Configurar el escenario',
				value: 'configure-scenario',
				selected: true,
			},
			{
				title: 'Restaurar los ajustes del CLI',
				value: 'restore-settings',
			},
		] as Choices<Operation>,
	})

	return operation
}
