import propTypes from 'prop-types'
import React from 'react';
import './Key.css';

export default class Key extends React.Component {

    static propTypes = {
        letter: propTypes.oneOf([
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z"
        ])
    }

    handleClick = () => {
        const { letter } = this.props;

        this.props.parentBehavior(letter)
    }

    render() {
        return (
            <button onClick={this.handleClick}>{
                this.props.letter
            }</button>
        )
    }

}