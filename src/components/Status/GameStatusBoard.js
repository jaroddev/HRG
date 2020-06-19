import propTypes from 'prop-types'
import React from 'react'
import Hanger from './Hanger';
import './GameStatusBoard.css'

const GameStatusBoard = ({ status, missed }) => {
    return (
        <div>
            <div className={`status ${status}`}></div>
            <div style={{ width: '100%', marginLeft: '37.5%' }}>
                <Hanger missed={missed} />

            </div>
        </div>
    )
}

GameStatusBoard.propTypes = {
    status: propTypes.any.isRequired,
}

export default GameStatusBoard;