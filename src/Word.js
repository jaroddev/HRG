import propTypes from 'prop-types'
import React from 'react'
import FoundLetter from './FoundLetter';

export default class Word extends React.Component {

    static propTypes = {
        guessed: propTypes.array,
        word: propTypes.string
    }

    render() {
        const { word, guessed } = this.props;

        console.log(guessed)

        const letters = [...word].map((letter, index) => {

            return <FoundLetter
                key={index}
                letter={letter}
                found={guessed.includes(letter)}
            />
        });

        return (
            <div className="word">{letters}</div>
        )
    }
}