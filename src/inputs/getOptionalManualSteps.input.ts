import { confirm } from './confirm.input'

type Return =
	| {
			addonsSettingsCopied: boolean
			addonsSettingsImported: boolean
			inputCancelled: false
			scenarioOpenIn3DEN: boolean
	  }
	| {
			inputCancelled: true
	  }

export async function getOptionalManualSteps(): Promise<Return> {
	const defaultRtn: Return = {
		addonsSettingsCopied: false,
		addonsSettingsImported: false,
		inputCancelled: false,
		scenarioOpenIn3DEN: false,
	}

	const scenarioOpenIn3DEN = await confirm({
		message: '1 / 3 - Abre el escenario en el 3DEN (editor de Arma III)',
		cancelMessageChoice: 'Postergar',
		confirmMessageChoice: 'Escenario abierto',
		defaultChoice: 'cancel',
	})
	if (scenarioOpenIn3DEN === undefined) return { inputCancelled: true }

	defaultRtn.scenarioOpenIn3DEN = scenarioOpenIn3DEN
	if (!scenarioOpenIn3DEN) return defaultRtn

	const addonsSettingsCopied = await confirm({
		message: '2 / 3 - Copia el contenido del archivo "cba_settings.sqf"',
		cancelMessageChoice: 'Postergar',
		confirmMessageChoice: 'Contenido copiado',
		defaultChoice: 'cancel',
	})
	if (addonsSettingsCopied === undefined) return { inputCancelled: true }

	defaultRtn.addonsSettingsCopied = addonsSettingsCopied
	if (!addonsSettingsCopied) return defaultRtn

	const addonsSettingsImported = await confirm({
		message: '3 / 3 - Importa el contenido a los addons options (servidor)',
		cancelMessageChoice: 'Postergar',
		confirmMessageChoice: 'Ajustes importados',
		defaultChoice: 'cancel',
	})
	if (addonsSettingsImported === undefined) return { inputCancelled: true }

	defaultRtn.addonsSettingsImported = addonsSettingsImported
	return defaultRtn
}
