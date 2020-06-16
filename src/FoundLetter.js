import propTypes from 'prop-types'
import React from 'react'
import './FoundLetter.css'

export default class FoundLetter extends React.Component {

    static propTypes = {
        found: propTypes.bool.isRequired,
        letter: propTypes.string.isRequired
    }

    render() {
        const {found, letter} = this.props;
        return (
            found ? <span className="found">{letter}</span> : <span className="not-found">_</span>
        )
    }
}