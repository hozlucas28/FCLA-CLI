import pico from 'picocolors'

type Params = {
	message: string
	color: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
}

export async function text({ message, color }: Params): Promise<void> {
	const styledMessage = pico[color](message)
	console.log(`\n${styledMessage}`)
}
