import {GameStatus} from '../../models/Game'

/* ------------------------- Action 実装 ------------------------- */

export const setGameStatus = (gameState: GameStatus[]) => ({
	type: 'gameState/SET_VALUE' as const,
	payload: {
		gameState,
	},
})

export type GameActions = ReturnType<typeof setGameStatus>