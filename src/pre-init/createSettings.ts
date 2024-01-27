import fs from 'node:fs/promises'
import { getAuthor } from '../inputs'
import { text } from '../outputs'
import type { Settings } from '../types'
import { getSettingsFilePath, saveFolderExists, settingsFileExists } from '../utils'
import { createSaveFolder } from './createSaveFolder'

export async function createSettings(): Promise<void> {
	// Welcome message
	await text({
		message:
			'Hemos detectado que es la primera vez que inicias el CLI.\n' +
			'Por lo que deberás completar las siguientes solicitudes\n' +
			'para crear tu propio archivo de ajustes.',
		color: 'magenta',
	})

	// Get settings
	const author = await getAuthor()
	if (!author) return

	const settings: Settings = { author }

	// Save settings
	const settingsFilePath = getSettingsFilePath()
	const folderExists = await saveFolderExists()
	if (!folderExists) await createSaveFolder()

	await fs.writeFile(settingsFilePath, JSON.stringify(settings, undefined, 4))

	const fileCreated = await settingsFileExists()
	if (!fileCreated) {
		await text({ message: '¡No se pudo crear el archivo de ajustes!', color: 'red' })
		return
	}

	// Mostrar mensaje de finalización
	await text({
		message: '¡Archivo de ajustes creado con éxito!\nYa puedes usar el CLI, pero deberás volver a ejecutarlo.',
		color: 'green',
	})
}
