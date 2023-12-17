import type { OptionalToRequired } from '../types'
import type { CreateSettingsParams } from './createSettings'

export const defaultCreateSettingsParams: OptionalToRequired<CreateSettingsParams> = {
	startMessage:
		'Hemos detectado que es la primera vez que inicias el CLI.\n' +
		'Por lo que deberas completar las siguientes solicitudes\n' +
		'para crear tu propio archivo de ajustes.',
	endMessage: {
		success: '¡Archivo de ajustes creado con éxito!\n' + 'Ya puedes usar el CLI, pero deberas volver a ejecutarlo.',
		fail: '¡No se pudo crear el archivo de ajustes!',
	},
}
