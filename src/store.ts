import {createStore, combineReducers, Action} from 'redux'
import game, { GameState } from './modules/Game'
import {GameActions} from './modules/Game/actions'


/* ------------------------- Store 実装 ------------------------- */

// 型定義
export type ReduxState = {
	game: GameState
}

// store 生成 ( Reducer と紐付け )
export default createStore(
	combineReducers({
		game,
	}),
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() // 拡張機能用
)

export type ReduxAction = GameActions | Action


