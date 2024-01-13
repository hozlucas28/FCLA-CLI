//#!/usr/bin/env node
import { factoryRestore } from './factoryRestore'
import { getOperation } from './inputs'
import { isFirstInit } from './isFirstInit'
import { isValidDir } from './isValidDir'
import { end, intro, text } from './outputs'
import { createSettings } from './pre-init'

async function main(introMsg = '¡Bienvenido al CLI de FCLA!') {
	// Start
	if (process.env.FACTORY_RESTORE) await factoryRestore()
	intro(introMsg)

	// Check if the CLI is running for the first time
	if (await isFirstInit()) {
		// Set configuration and exit
		await createSettings({})
		await end()
	}

	// Check if the working directory is valid
	if (!(await isValidDir())) {
		// Exit
		await text({
			color: 'red',
			message:
				'¡Directorio de trabajo inválido!\n\nEjecute el CLI en un directorio\ndonde se encuentre un archivo: mission.sqm.',
		})
		await end()
	}

	// Select an operation
	const operation = await getOperation()
	if (!operation) end()

	switch (operation) {
		case 'configure-scenario':
			// TODO
			break

		default: // "restore-settings"
			// Restore settings to factory defaults and restart
			await factoryRestore()
			await text({ message: '¡Valores de fábrica restaurados!', color: 'green' })
			await main('CLI reiniciado...')
			break
	}
}

main()
