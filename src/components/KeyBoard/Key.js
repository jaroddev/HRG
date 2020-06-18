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

    state = {
        clicked:false
    }

    handleClick = () => {
        const { letter } = this.props;
        this.setState({
            clicked:true
        })
        this.props.parentBehavior(letter)
    }

    render() {
        const {clicked} = this.state;
        return (
            <button onClick={this.handleClick} disabled={clicked}>{
                this.props.letter
            }</button>
        )
    }

}