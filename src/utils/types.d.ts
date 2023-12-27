type IsOptional<T extends Record<PropertyKey, any>, U extends keyof T> = {} extends Pick<T, U> ? true : false

export type Optionals<T extends Record<PropertyKey, any>> = {
	[Key in keyof T as IsOptional<T, Key> extends true ? Key : never]: T[Key]
}

export type OptionalsToRequired<T extends Record<PropertyKey, any>> = Required<Optionals<T>>
