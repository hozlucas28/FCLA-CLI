import fs from 'node:fs/promises'
import { getSaveFolderPath, saveFolderExists } from '../utils'

export async function createSaveFolder(): Promise<boolean> {
	const folderExists = await saveFolderExists()
	if (folderExists) return true

	const folderPath = getSaveFolderPath()
	await fs.mkdir(folderPath, { recursive: true })

	const folderCreated = await saveFolderExists()
	return folderCreated
}
