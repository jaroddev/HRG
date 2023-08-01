import { useState } from 'react';
import './Key.css';

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
    letter: Letter;
    parentBehavior: (letter: Letter) => void
};

const Key = ({ letter, parentBehavior }: props) => {
    const [clicked, setCliked] = useState(false);

    const handleClick = () => {
        setCliked(true)
        parentBehavior(letter)
    }

    return <button onClick={() => handleClick()} disabled={clicked}>
        {letter}
    </button>
}

export default Key;