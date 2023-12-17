import fs from 'node:fs/promises'
import { getAuthor } from '../inputs'
import { text } from '../outputs/text.output'
import { getSettingsFilePath, saveFolderExists, settingsFileExists } from '../utils'
import { defaultCreateSettingsParams } from './_utilities'
import { createSaveFolder } from './createSaveFolder'
import type { Settings } from './types'

export type CreateSettingsParams = {
	startMessage?: string
	endMessage?: {
		fail: string
		success: string
	}
}

export async function createSettings({
	startMessage = defaultCreateSettingsParams.startMessage,
	endMessage = defaultCreateSettingsParams.endMessage,
}: CreateSettingsParams): Promise<void> {
	// Mostrar mensaje de bienvenida
	text({ message: startMessage, color: 'yellow' })

	// Obtener ajustes
	const author = await getAuthor()
	if (!author) return

	const settings: Settings = { author }

	// Guardar ajustes
	const settingsFilePath = getSettingsFilePath()
	const folderExists = await saveFolderExists()
	if (!folderExists) await createSaveFolder()

	await fs.writeFile(settingsFilePath, JSON.stringify(settings, undefined, 4))

	const fileCreated = await settingsFileExists()
	if (!fileCreated) {
		text({ message: endMessage.fail, color: 'red' })
		return
	}

	// Mostrar mensaje de finalización
	text({ message: endMessage.success, color: 'green' })
}
