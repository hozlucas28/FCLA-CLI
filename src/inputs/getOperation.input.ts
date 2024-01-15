import prompts from 'prompts'
import { lineBreak } from '../decorators'
import type { Operation } from '../types'
import type { Choices, Prompts } from './types'

export async function getOperation(): Promise<Operation | undefined> {
	await lineBreak()

	const choices: Choices<Operation> = [
		{
			title: 'Configurar el escenario',
			value: 'configure-scenario',
			selected: true,
		},
		{
			title: 'Restaurar valores de fábrica',
			value: 'restore-factory-settings',
		},
	]

	const { operation }: Prompts<'operation', Operation> = await prompts({
		type: 'select',
		name: 'operation',
		message: 'Seleccione la operación a ejecutar:',
		choices,
	})

	return operation
}
