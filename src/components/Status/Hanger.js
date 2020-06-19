import propTypes from 'prop-types'
import React from 'react'


const Hanger = ({ missed }) => {
    return (
        <div style={{ backgroundColor: 'black', width: '400px' }}>
            <img src={`/hanger/${missed}.png`} alt="hanger images">

            </img>
        </div >
    )
}

Hanger.propTypes = {
    missed: propTypes.number
}

export default Hanger