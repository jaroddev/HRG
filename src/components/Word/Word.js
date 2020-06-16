import propTypes from 'prop-types'
import React from 'react'
import FoundLetter from './FoundLetter';

const Word = ({ guessed, word }) => {
    const letters = [...word].map((letter, index) => {
        return <FoundLetter
            key={index}
            letter={letter}
            found={guessed.includes(letter)}
        />
    })

    return <div className="word">{letters}</div>
};

Word.propTypes = {
    guessed: propTypes.array,
    word: propTypes.string
}

export default Word