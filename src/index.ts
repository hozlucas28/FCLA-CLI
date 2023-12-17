//#!/usr/bin/env node
import { factoryRestore } from './factoryRestore'
import { isFirstInit } from './isFirstInit'
import { end, intro } from './outputs'
import { createSettings } from './pre-init'

async function main() {
	if (process.env.FACTORY_RESTORE === 'true') await factoryRestore()

	await intro()
	const firstInit = await isFirstInit()

	if (firstInit) {
		await createSettings({})
		await end()
		return
	}

	await end()
}

main()
