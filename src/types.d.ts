export type Loadouts = {
	helicopters: boolean
	planes: boolean
	armored: boolean
	divers: boolean
	infantry: boolean
	paratroopers: boolean
	reconnaissance: boolean
}

export type Operation = 'configure-scenario' | 'restore-factory-settings'

export type Settings = {
	author: string
}

export type Scenario = 'campaign-mission' | 'zeus-mission' | 'training-map'
