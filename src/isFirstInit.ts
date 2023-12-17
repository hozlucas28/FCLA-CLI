import { settingsFileExists } from './utils/paths.util'

export async function isFirstInit(): Promise<boolean> {
	const fileExists = await settingsFileExists()
	return !fileExists
}
