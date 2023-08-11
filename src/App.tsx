import { useEffect, useState } from 'react'
import './App.css'

import type { Letter, history, score, status } from './domain';
import { computeScore, computeStatus, push } from './domain';
import GameStatusBoard from './components/Status/GameStatusBoard';
import { Game } from './components/Game'

const useHistory = (word: any) => {
	const [history, setHistory] = useState<history>([]);

	const [score, setScore] = useState<score>({
		missed: 0,
		found: 0
	});

	useEffect(() => {
		const newScore = computeScore(word, history)
		setScore(newScore);
	}, [history])

	const [status, setStatus] = useState<status>("");

	useEffect(() => {
		const newStatus = computeStatus(score, word);
		setStatus(newStatus);
	}, [score])

	const guess = (letter: Letter) => {
		setHistory(
			push(history, letter)
		)
	}


	return {
		history,
		score,
		status,
		guess
	}
}

function App() {
	const [word, _] = useState("Hangman".toUpperCase());
	const { guess, history, score, status } = useHistory(word);

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