//#!/usr/bin/env node
import { end, intro } from './outputs'
import { createSettings } from './pre-init'
import { factoryRestore } from './factoryRestore'
import { isFirstInit } from './isFirstInit'

async function main() {
	if (process.env.FACTORY_RESTORE) await factoryRestore()

	await intro()
	const firstInit = await isFirstInit()

	if (firstInit) {
		await createSettings({})
		await end()
		return
	}
}

main()
