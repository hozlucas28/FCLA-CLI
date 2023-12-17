import fs from 'node:fs/promises'
import { getSaveFolderPath, saveFolderExists } from './utils'

export async function factoryRestore(): Promise<void> {
	const folderExists = await saveFolderExists()
	if (!folderExists) return

	const saveFolderPath = getSaveFolderPath()
	await fs.rm(saveFolderPath, { recursive: true })
}
