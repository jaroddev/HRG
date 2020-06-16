import propTypes from 'prop-types'
import React from 'react'
import './FoundLetter.css'

function FoundLetter({found, letter}){
    return (
        found ? <span className="found">{letter}</span> : <span className="not-found">_</span>
    )
}

FoundLetter.propTypes = {
    found: propTypes.bool.isRequired,
    letter: propTypes.string.isRequired
}

export default FoundLetter;