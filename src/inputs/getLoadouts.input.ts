import prompts from 'prompts'
import { lineBreak } from '../decorators'
import type { Loadouts } from '../types'
import type { Choices, Prompts } from './types'

export async function getLoadouts(): Promise<Loadouts[] | undefined> {
	await lineBreak()

	const choices: Choices<keyof Loadouts> = [
		{
			title: 'Infantería',
			value: 'infantry',
		},

		{
			title: 'Paracaidistas',
			value: 'paratroopers',
		},
		{
			title: 'Reconocimiento',
			value: 'reconnaissance',
		},
		{
			title: 'Blindados',
			value: 'armored',
		},
		{
			title: 'Helicopteristas',
			value: 'helicopters',
		},
		{
			title: 'Aviadores',
			value: 'planes',
		},
		{
			title: 'Buzos',
			value: 'divers',
		},
	]

	const { loadouts }: Prompts<'loadouts', Loadouts[]> = await prompts({
		name: 'loadouts',
		type: 'multiselect',
		message: 'Seleccione los loadouts que desea incluir:',
		choices,
	})

	return loadouts
}
