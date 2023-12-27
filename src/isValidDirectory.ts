import fs from 'node:fs/promises'
import { cwd } from 'node:process'

export async function isValidDirectory(): Promise<boolean> {
	const currentDir = cwd()

	const files = await fs.readdir(currentDir, { withFileTypes: true })
	const fileNames = files.map((file) => file.name)

	const hasSQMFile = fileNames.includes('mission.sqm')

	return hasSQMFile
}
