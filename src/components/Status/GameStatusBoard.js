import propTypes from 'prop-types'
import React from 'react'

const GameStatusBoard = ({ status }) => {
    return <div className="status">{(status === "won" || status === "lost") && status}</div>
}

GameStatusBoard.propTypes = {
    status: propTypes.any.isRequired,
}

export default GameStatusBoard;