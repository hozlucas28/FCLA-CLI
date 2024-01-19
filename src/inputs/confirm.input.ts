import prompts from 'prompts'
import { lineBreak } from '../decorators'
import type { Choices, Prompts } from './types'

type Params = {
	cancelMsgChoice: string
	confirmMsgChoice: string
	defaultChoice: 'confirm' | 'cancel'
	msg: string
}

export async function confirm({
	cancelMsgChoice,
	confirmMsgChoice,
	defaultChoice,
	msg,
}: Params): Promise<boolean | undefined> {
	await lineBreak()

	const choices: Choices<true | false> = [
		{
			title: confirmMsgChoice,
			value: true,
			selected: defaultChoice === 'confirm',
		},
		{
			title: cancelMsgChoice,
			value: false,
			selected: defaultChoice === 'cancel',
		},
	]

	const { confirm }: Prompts<'confirm', true | false> = await prompts({
		choices,
		message: msg,
		name: 'confirm',
		type: 'select',
	})

	return confirm
}
