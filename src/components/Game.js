import React from 'react';
import KeyBoard from '../components/KeyBoard/Keyboard';
import Hanger from '../components/Status/Hanger';
import Word from '../components/Word/Word';

export const Game = ({ guessed, missed, word, updateState }) => {
    return (
        <div className="game" >
            <div style={{ display: 'flex', margin: 'auto', width: '60%' }}>
                <Hanger missed={missed} />
                <div>
                    <Word guessed={guessed} word={word} />
                    <KeyBoard parentBehavior={updateState} />
                </div>
            </div>
        </div>
    )
}