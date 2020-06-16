import propTypes from 'prop-types'
import React from 'react'

export default class GameStatusBoard extends React.Component {

    static propTypes = {
        status: propTypes.string.isRequired,
    }

    render() {
        const { status } = this.props;
        return (
            <div className="status">{(status === "won" || status === "lost") && status}</div>
        )
    }
}