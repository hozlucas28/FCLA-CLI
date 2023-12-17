export type Prompts<T extends string | string[]> = Awaited<{
	[Key in T extends string ? T : T[number]]: string | undefined
}>
