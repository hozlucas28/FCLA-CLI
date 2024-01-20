//#!/usr/bin/env node
import { factoryRestore } from './factoryRestore'
import {
	animatedIntro,
	confirm,
	getEndDesc,
	getEndTitle,
	getLoadouts,
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
	if (process.env.FACTORY_RESTORE === 'true') await factoryRestore()
	intro(introMsg)

	// Check if the CLI is running for the first time
	if (await isFirstInit()) {
		// Set configuration and exit
		await createSettings({})
		await end()
		return
	}

	// Check if the working directory is valid
	if (process.env.BYPASS_DIRECTORY_VALIDATION !== 'true' && !(await isValidDir())) {
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
		await end()
		return
	}

	switch (operation) {
		case 'configure-scenario':
			// Configure basic scenario
			const scenarioName = await getScenarioName()
			if (!scenarioName) {
				await end()
				return
			}

			const scenarioDesc = await getScenarioDesc()
			if (!scenarioDesc) {
				await end()
				return
			}

			const showAnimatedIntro = await animatedIntro()
			if (typeof showAnimatedIntro !== 'boolean') {
				await end()
				return
			}

			const allowProfileGlasses = await profileGlasses()
			if (typeof allowProfileGlasses !== 'boolean') {
				await end()
				return
			}

			const scenarioType = await getTypeOfScenario()
			if (!scenarioType) {
				await end()
				return
			}

			// Define specific settings for campaign and zeus missions
			if (scenarioType === 'campaign-mission' || scenarioType === 'zeus-mission') {
				const respawnDelay = await getRespawnDelay()
				if (!respawnDelay) {
					await end()
					return
				}

				const endTitle = await getEndTitle()
				if (!endTitle) {
					await end()
					return
				}

				const endDesc = await getEndDesc()
				if (!endDesc) {
					await end()
					return
				}
			}

			await text({ message: '¡Configuración básica finalizada!', color: 'green' })

			// Select loadouts
			const loadouts = await getLoadouts()
			if (!loadouts) {
				await end()
				return
			}

			await text({
				icon: '[i]',
				message:
					'Si el escenario está abierto en el 3DEN (editor de Arma III), salga de él.\nAdemás, si la carpeta del mismo está abierta en Visual Studio Code (VSCode),\ncierre la aplicación.',
				color: 'cyan',
			})

			// Create documents, CLI log, rename scenario folder, and open scenario folder in VSCode.
			const shouldContinue = await confirm({
				cancelMessageChoice: 'No',
				confirmMessageChoice: 'Si',
				defaultChoice: 'cancel',
				message: '¿Has salido del escenario y cerrado la carpeta correspondiente en VSCode?',
			})
			if (!shouldContinue) {
				await end()
				return
			}

			// TODO: Create documents, CLI log, rename scenario folder, and open scenario folder in VSCode.
			/* Intructions... */

			await text({ message: '¡Escenario configurado!', color: 'green' })

			// Manual steps to make a complete scenario configuration
			await text({
				icon: '[i]',
				message:
					'Para llevar a cabo una configuración completa del escenario,\nsigue los pasos que se indican a continuación...',
				color: 'cyan',
			})

			const temp = await confirm({
				message: '1° - Abre el escenario en el 3DEN (editor de Arma III)',
				cancelMessageChoice: 'Postergar',
				confirmMessageChoice: 'Escenario abierto',
				defaultChoice: 'cancel',
			})
			if (!temp) {
				// TODO: Add remaining steps to todos.md file
				await end()
				return
			}
			break

		default: // "restore-factory-settings"
			// Restore settings to factory defaults and restart
			await factoryRestore()
			await text({ message: '¡Valores de fábrica restaurados!', color: 'green' })
			await main('CLI reiniciado...')
			break
	}

	await end()
}

main()
