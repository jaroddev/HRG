import FoundLetter from './FoundLetter';

type props = {
    guessed: Array<string>,
    word: string
};

const Word = ({ guessed, word }: props) => {
    const letters = [...word].map((letter, index) => {
        return <FoundLetter
            key={index}
            letter={letter}
            found={guessed.includes(letter)}
        />
    })

    return <div className="word">{letters}</div>
};

export default Word