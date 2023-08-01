import Key from './Key';
import './Keyboard.css';

const firstRow = [
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
] as const;

const secondRow = [
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
] as const;

const thirdRow = [
    "W",
    "X",
    "C",
    "V",
    "B",
    "N"
] as const;

const letters = [
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
] as const;

type Letter = typeof letters[number];

type props = {
    parentBehavior: (letter: Letter) => void
};

const KeyBoard = ({ parentBehavior }: props) => {
    return <div>
        {
            [firstRow, secondRow, thirdRow].map(keys => {
                return <div className='keyboard'>
                    {
                        keys.map(letter => {
                            return <Key
                                key={letter}
                                letter={letter}
                                parentBehavior={parentBehavior}
                            />
                        })
                    }
                </div>
            })
        }
    </div>
}

export default KeyBoard;