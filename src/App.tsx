import { useState } from 'react'
import './App.css'

import type { Letter } from './domain';
import { computeScore, computeStatus } from './domain';
import GameStatusBoard from './components/Status/GameStatusBoard';
import { Game } from './components/Game'

function App() {
	const [word, _] = useState("Hangman".toUpperCase());
	const [history, setPreviousLetters] = useState<Letter[]>([]);

	const guess = (letter: Letter) => {
		if (!history.includes(letter)) {
			setPreviousLetters(
				[...history, letter]
			);
		}
	};

	const score = computeScore(word, history);
	const status = computeStatus(score, word);

	return (
		<>
			<div className="App" >
				{
					!["won", "lost"].includes(status)
						? <Game guessed={history} missed={score.missed} word={word} updateState={guess} />
						: <GameStatusBoard status={status} missed={score.missed} />
				}
			</div>
		</>
	)
}

export default App