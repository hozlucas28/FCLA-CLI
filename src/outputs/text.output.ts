import pico from 'picocolors'

type Params = {
	icon?: string
	message: string
	color: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
}

export async function text({ icon = '', message, color }: Params): Promise<void> {
	const iconFmt = icon === '' ? '' : `${icon} `
	const messageFmt = message
		.split('\n')
		.map((line, index) => (index === 0 ? line : line.padStart(iconFmt.length + line.length)))
		.join('\n')

	const styledMessage = pico[color](`${iconFmt}${messageFmt}`)

	console.log(`\n${styledMessage}`)
}
