import './FoundLetter.css'

type props = {
    found: boolean,
    letter: string
};

const FoundLetter = ({ found, letter }: props) => {
    return (
        found ? <span className="found">{letter}</span> : <span className="not-found">_</span>
    )
}

export default FoundLetter;