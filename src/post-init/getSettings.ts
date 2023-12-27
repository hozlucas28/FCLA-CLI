import fs from 'node:fs/promises'
import type { Settings } from '../types'
import { getSettingsFilePath } from '../utils'

export async function getSettings(): Promise<Settings> {
	const filePath = getSettingsFilePath()
	const file = await fs.readFile(filePath, 'utf-8')

	return JSON.parse(file) as Settings
}
