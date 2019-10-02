import React from 'react';
import {useSelector} from 'react-redux'
import {ReduxState} from '../../store'

type SquareProps = {
    num: number
}

const Square: React.FC<SquareProps> = props => {
    // store からデータ取得
    const bordState = useSelector((state: ReduxState) => state.game.gameState[props.num])
    
    return (
    <button className="square" onClick={() => alert('click')}>
        {bordState.num}
    </button>
    );
}

export default Square;
