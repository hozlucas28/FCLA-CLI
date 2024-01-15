//#!/usr/bin/env node
import { factoryRestore } from './factoryRestore'
import {
	animatedIntro,
	getEndDesc,
	getEndTitle,
	getOperation,
	getRespawnDelay,
	getScenarioDesc,
	getScenarioName,
	getTypeOfScenario,
	profileGlasses,
} from './inputs'
import { isFirstInit } from './isFirstInit'
import { isValidDir } from './isValidDir'
import { end, intro, text } from './outputs'
import { createSettings } from './pre-init'

async function main(introMsg = '¡Bienvenido al CLI de FCLA!') {
	// Start
	if (process.env.FACTORY_RESTORE) await factoryRestore()
	intro(introMsg)

	// Check if the CLI is running for the first time
	if (await isFirstInit()) {
		// Set configuration and exit
		await createSettings({})
		await end()
		return
	}

	// Check if the working directory is valid
	if (!(await isValidDir())) {
		// Exit
		await text({
			color: 'red',
			message:
				'¡Directorio de trabajo inválido!\n\nEjecute el CLI en un directorio\ndonde se encuentre un archivo: mission.sqm.',
		})
		await end()
		return
	}

	// Select an operation
	const operation = await getOperation()
	if (!operation) {
		end()
		return
	}

	switch (operation) {
		case 'configure-scenario':
			// Configure scenario
			const scenarioName = await getScenarioName()
			if (!scenarioName) {
				end()
				return
			}

			const scenarioDesc = await getScenarioDesc()
			if (!scenarioDesc) {
				end()
				return
			}

			const showAnimatedIntro = await animatedIntro()
			if (!showAnimatedIntro) {
				end()
				return
			}

			const allowProfileGlasses = await profileGlasses()
			if (!allowProfileGlasses) {
				end()
				return
			}

			const scenarioType = await getTypeOfScenario()
			if (!scenarioType) {
				end()
				return
			}

			// Define specific settings for campaign and zeus missions
			if (scenarioType === 'campaign-mission' || scenarioType === 'zeus-mission') {
				const respawnDelay = await getRespawnDelay()
				if (!respawnDelay) {
					end()
					return
				}

				const endTitle = await getEndTitle()
				if (!endTitle) {
					end()
					return
				}

				const endDesc = await getEndDesc()
				if (!endDesc) {
					end()
					return
				}
			}

			text({ message: '¡Configuración básica finalizada!', color: 'green' })
			break

		default: // "restore-factory-settings"
			// Restore settings to factory defaults and restart
			await factoryRestore()
			await text({ message: '¡Valores de fábrica restaurados!', color: 'green' })
			await main('CLI reiniciado...')
			break
	}

	end()
}

main()
