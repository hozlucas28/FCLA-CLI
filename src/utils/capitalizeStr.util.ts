export function capitalizeStr(str: string): string {
	const strArr = str.split(' ')
	const capitalizedStrArr = strArr.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
	const capitalizedStr = capitalizedStrArr.join(' ')

	return capitalizedStr
}
