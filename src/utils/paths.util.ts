import fs from 'node:fs'
import path from 'node:path'

export function getSaveFolderPath(): string {
	const basePath = process.cwd().split(path.sep).slice(0, 3)
	return path.join(...basePath, 'AppData', 'Local', 'FCLA-CLI')
}

export function getSettingsFilePath(): string {
	const filePath = path.join(getSaveFolderPath(), 'settings.json')
	return filePath
}

export async function saveFolderExists(): Promise<boolean> {
	const saveFolderPath = getSaveFolderPath()
	const folderExists = fs.existsSync(saveFolderPath)

	return folderExists
}

export async function settingsFileExists(): Promise<boolean> {
	const folderExists = await saveFolderExists()
	if (!folderExists) return false

	const filePath = getSettingsFilePath()
	const fileExists = fs.existsSync(filePath)

	return fileExists
}
