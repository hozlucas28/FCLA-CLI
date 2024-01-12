//#!/usr/bin/env node
import { factoryRestore } from './factoryRestore'
import { isFirstInit } from './isFirstInit'
import { isValidDir } from './isValidDir'
import { end, intro, text } from './outputs'
import { createSettings } from './pre-init'

async function main() {
	if (process.env.FACTORY_RESTORE) await factoryRestore()
	await intro()

	if (await isFirstInit()) {
		await createSettings({})
		await end()
	}

	if (!(await isValidDir())) {
		await text({
			color: 'red',
			message:
				'¡Directorio de trabajo inválido!\n\nEjecute el CLI en un directorio\ndonde se encuentre un archivo: mission.sqm.',
		})
		await end()
	}
}

main()
