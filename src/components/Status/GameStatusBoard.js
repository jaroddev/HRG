import propTypes from 'prop-types'
import React from 'react'
import './GameStatusBoard.css'

const GameStatusBoard = ({ status }) => {
    return <div className={`status ${status}`}></div>
}

GameStatusBoard.propTypes = {
    status: propTypes.any.isRequired,
}

export default GameStatusBoard;