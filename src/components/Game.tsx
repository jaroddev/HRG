import KeyBoard from '../components/KeyBoard/Keyboard';
import Hanger from '../components/Status/Hanger';
import Word from '../components/Word/Word';

import './Game.css';

type props = {
    guessed: Array<string>,
    missed: any,
    word: string,
    updateState: any
};

export const Game = ({ guessed, missed, word, updateState }: props) => {
    return (
        <div className="game">
            <div className='layout'>
                <Hanger missed={missed} />
                <div>
                    <Word guessed={guessed} word={word} />
                    <KeyBoard parentBehavior={updateState} />
                </div>
            </div>
        </div>
    )
}