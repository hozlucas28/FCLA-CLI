import { capitalizeStr } from './capitalizeStr.util'

type Params = {
	str: string
	capitalize?: boolean
}

export function formatStr({ str, capitalize = false }: Params): string {
	let formattedStr = str.trim().replace(/\s\s+/g, ' ')
	formattedStr = capitalize ? capitalizeStr(formattedStr) : formattedStr

	return formattedStr
}
