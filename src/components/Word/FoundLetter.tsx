import './FoundLetter.css'

type props = {
    found: boolean,
    letter: string
};

const UNREVEALED = '_' as const;

// should be just letter
// hangman hint ? hangman letter ??
// something lile that ???
const FoundLetter = ({ found, letter }: props) => {
    return (
        found ? <Guessed letter={letter} found={found} />
            : <Unrevealed />
    )
}

const Guessed = ({ letter }: props) => <span className="found">{letter}</span>;

const Unrevealed = () => <span className="not-found">{UNREVEALED}</span>;

export default FoundLetter;