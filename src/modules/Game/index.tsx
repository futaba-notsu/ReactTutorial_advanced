import {GameStatus} from '../../models/Game'
import {GameActions} from './actions'
import {Reducer} from 'redux'

/* ------------------------- Resucer 実装 ------------------------- */

// state 定義
export interface GameState {
	gameState: GameStatus[]
}

// 初期化
const initialState: GameState = {
	gameState: [
		{
            num: 1,
            value: '',
		},
		{
            num: 2,
            value: '',
		},
		{
            num: 3,
            value: '',
		},
		{
            num: 4,
            value: '',
		},
		{
            num: 5,
            value: '',
		},
		{
            num: 6,
            value: '',
		},
		{
            num: 7,
            value: '',
		},
		{
            num: 8,
            value: '',
		},
		{
            num: 9,
            value: '',
		},
	]
}

// reducer
const reducer: Reducer<GameState, GameActions> = (state = initialState, action) => {
	switch (action.type) {
		case 'gameState/SET_VALUE':
			return Object.assign({}, state, {
				gameState: action.payload.gameState
			})
		default:
			return state
	}
}

export default reducer
