import { factoryRestore } from '../factoryRestore'
import { text } from '../outputs/text.output'
import type { Operation } from '../types'

export const operationActions: Record<Operation, () => Promise<void>> = {
	'configure-scenario': async () => {},

	'restore-settings': async () => {
		await factoryRestore()
		await text({ message: '¡Ajustes del CLI restaurados!', color: 'green' })
	},
}
