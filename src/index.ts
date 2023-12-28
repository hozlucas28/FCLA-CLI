//#!/usr/bin/env node
import { operationActions } from './actions'
import { factoryRestore } from './factoryRestore'
import { getOperation } from './inputs'
import { isFirstInit } from './isFirstInit'
import { isValidDirectory } from './isValidDirectory'
import { end, intro, text } from './outputs'
import { createSettings } from './pre-init'

async function main() {
	if (process.env.FACTORY_RESTORE === 'true') await factoryRestore()

	await intro()
	const firstInit = await isFirstInit()

	if (firstInit) {
		await createSettings({})
		await end()
		return
	}

	const validDirectory = await isValidDirectory()
	if (!validDirectory) {
		await text({
			color: 'red',
			message:
				'¡Directorio de trabajo inválido!\n\nEjecute el CLI en un directorio\ndonde se encuentre un archivo: mission.sqm.',
		})
		await end()
		return
	}

	const operation = await getOperation()
	if (!operation) {
		await end()
		return
	}

	await operationActions[operation]()
	await end()
}

main()
