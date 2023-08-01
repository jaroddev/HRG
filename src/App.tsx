import { useState } from 'react'
import './App.css'

import GameStatusBoard from './components/Status/GameStatusBoard';
import { Game } from './components/Game'

const MAX_TRIALS = 6;

function App() {
	// guessedLetters
	const [guessed, setGuessed] = useState<string[]>([]);
	const [missed, setMissed] = useState(0);
	const [word, _] = useState("Hangman".toUpperCase());
	const [status, setStatus] = useState<"" | "won" | "lost">("");

	const updateGameStatus = (): "" | "won" | "lost" => {
		const boolArray = Array.from(word).map(letter => guessed.includes(letter))

		if (boolArray.length === 0) {
			return ""
		}

		if (missed > MAX_TRIALS - 1) {
			return "lost"
		} else if (boolArray.reduce((base, value) => base && value)) {
			return "won"
		}

		return ""
	}

	const updateState = (letter: string) => {
		const alreadyGuessed = guessed.includes(letter);

		if (!alreadyGuessed) {
			setGuessed([
				...guessed,
				letter
			])
		}

		if (!alreadyGuessed && !word.includes(letter)) {
			setMissed(missed + 1);
		}

		setStatus(updateGameStatus())
	}

	return (
		<>
			<div className="App" >
				{
					!["won", "lost"].includes(status)
						? <Game guessed={guessed} missed={missed} word={word} updateState={updateState} />
						: <GameStatusBoard status={status} missed={missed} />
				}
			</div>
		</>
	)
}

export default App