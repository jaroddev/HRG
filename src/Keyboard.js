import propTypes from 'prop-types'
import React from 'react';
import Key from './Key';
import './Keyboard.css';

export default class KeyBoard extends React.Component {

    static first_keys = [
        "A",
        "Z",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P"
    ]

    static second_keys = [
        "Q",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M"
    ]

    static third_keys = [
        "W",
        "X",
        "C",
        "V",
        "B",
        "N"
    ]

    static propTypes = {
        parentBehavior: propTypes.func.isRequired
    }

    createKeyboard = (letter) => {
        return <Key key={letter} letter={letter} parentBehavior={this.props.parentBehavior} />
    }

    render() {
        return (
            <div>
                <div className="keyboard">
                    {KeyBoard.first_keys.map(this.createKeyboard)}
                </div>

                <div className="keyboard">
                    {KeyBoard.second_keys.map(this.createKeyboard)}
                </div>

                <div className="keyboard">
                    {KeyBoard.third_keys.map(this.createKeyboard)}
                </div>
            </div>
        )
    }

}