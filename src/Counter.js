import propTypes from 'prop-types'
import React from 'react'


const Counter = ({ missed }) => {
    return <div className="guesses-counter">
        {`${missed}/8`}
    </div>
}

Counter.propTypes = {
    missed: propTypes.number
}

export default Counter