import { useState } from 'react';

import './Key.css';
import { Letter } from '../../domain'

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