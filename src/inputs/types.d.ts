export type Choices<T extends boolean | number | string> = {
	title: string
	value: T
	disabled?: boolean
	selected?: boolean
	description?: string
}[]

export type Prompts<T extends string | string[], K extends any | any[]> = Awaited<{
	[Key in T extends string ? T : T[number]]: K | undefined
}>
