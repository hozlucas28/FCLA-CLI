//#!/usr/bin/env node
import { factoryRestore } from './factoryRestore'
import { isFirstInit } from './isFirstInit'
import { isValidDirectory } from './isValidDirectory'
import { end, intro } from './outputs'
import { text } from './outputs/text.output'
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

	await end()
}

main()
