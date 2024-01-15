import { getSaveFolderPath, getSettingsFilePath, saveFolderExists, settingsFileExists } from '../../../utils/paths.util'

describe('Unit testing of getSaveFolderPath()', () => {
	it('Should return save folder path', () => {
		const received = getSaveFolderPath()
		const expected = 'C:\\Users\\hozlu\\AppData\\Local\\FCLA-CLI' // May fail on other machines.
		expect(received).toBe(expected)
	})
})

describe('Unit testing of getSettingsFilePath()', () => {
	it('Should return settings file path', () => {
		const received = getSettingsFilePath()
		const expected = 'C:\\Users\\hozlu\\AppData\\Local\\FCLA-CLI\\settings.json' // May fail on other machines.
		expect(received).toBe(expected)
	})
})

describe('Unit testing of saveFolderExists()', () => {
	it('Should return true if save folder exists', async () => {
		const received = await saveFolderExists()
		expect(received).toBe(true)
	})
})

describe('Unit testing of settingsFileExists()', () => {
	it('Should return true if settings file exists', async () => {
		const received = await settingsFileExists()
		expect(received).toBe(true)
	})
})
