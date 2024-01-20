import prompts from 'prompts'
import { lineBreak } from '../decorators'
import type { Choices, Prompts } from './types'

type Params = {
	cancelMessageChoice: string
	confirmMessageChoice: string
	defaultChoice: 'confirm' | 'cancel'
	message: string
}

export async function confirm({
	cancelMessageChoice,
	confirmMessageChoice,
	defaultChoice,
	message,
}: Params): Promise<boolean | undefined> {
	await lineBreak()

	const choices: Choices<true | false> = [
		{
			title: confirmMessageChoice,
			value: true,
			selected: defaultChoice === 'confirm',
		},
		{
			title: cancelMessageChoice,
			value: false,
			selected: defaultChoice === 'cancel',
		},
	]

	const { confirm }: Prompts<'confirm', true | false> = await prompts({
		choices,
		message: message,
		name: 'confirm',
		type: 'select',
	})

	return confirm
}
