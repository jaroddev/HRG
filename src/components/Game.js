import React from 'react';
import KeyBoard from '../components/KeyBoard/Keyboard';
import Counter from '../components/Status/Counter';
import Word from '../components/Word/Word';

export const Game = ({guessed, missed, word, updateState}) => {
    console.log(updateState)
    return (
        <div className="game" >
            <Counter missed={missed} />
            <Word guessed={guessed} word={word} />
            <KeyBoard parentBehavior={updateState} />
        </div>
    )
}