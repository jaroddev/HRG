import propTypes from 'prop-types'
import React from 'react'

export default class Counter extends React.Component {

    static propTypes = {
        missed: propTypes.number
    }

    render() {
        return (
            <div className="guesses-counter">
                {`${this.props.missed}/8`}
            </div>
        )
    }
}