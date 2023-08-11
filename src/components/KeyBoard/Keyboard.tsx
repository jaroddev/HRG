import Key from './Key';

import './Keyboard.css';
import { Letter } from '../../domain';

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

type props = {
    parentBehavior: (letter: Letter) => void
};

const KeyBoard = ({ parentBehavior }: props) => {
    return <div>
        {
            [firstRow, secondRow, thirdRow].map((keys, rowID) => {
                return <Row rowID={rowID}
                    key={rowID}
                    keys={keys}
                    parentBehavior={parentBehavior}
                />
            })
        }
    </div>
}

type RowProps = props & {
    rowID: number
    keys: readonly Letter[]
}

const Row = ({ rowID, keys, parentBehavior }: RowProps) => {
    return (
        <div className='keyboard' key={rowID}>
            {
                keys.map((letter, keyID) => {
                    return <Key
                        key={keyID}
                        letter={letter}
                        parentBehavior={parentBehavior}
                    />
                })
            }
        </div>
    )
}

export default KeyBoard;