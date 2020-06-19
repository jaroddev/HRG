import React from 'react';
import './App.css';
import GameStatusBoard from '../components/Status/GameStatusBoard';
import { Game } from '../components/Game'


class App extends React.Component {

	static MAX_TRIALS = 6;

	state = {
		guessed: [],
		missed: 0,
		word: "Hangman".toUpperCase(),
		status: "",
	}

	updateState = (letter) => {
		let { guessed, missed, word, status } = this.state;
		const alreadyGuessed = guessed.includes(letter);

		if (!alreadyGuessed) {
			guessed.push(letter)
		}

		missed = !alreadyGuessed && !word.includes(letter) ? missed + 1 : missed

		status = this.updateGameStatus(missed, guessed, word)

		this.setState({
			guessed: guessed,
			missed: missed,
			status: status
		})
	}

	updateGameStatus(missed, guessed, word) {
		const boolArray = Array.from(word).map(letter => guessed.includes(letter))

		if (missed > App.MAX_TRIALS - 1) {
			return "lost"
		} else if (boolArray.length === 0) {
			return ""
		} else {
			return boolArray.reduce((base, value) => base && value) && "won"
		}

	}

	render() {
		const { guessed, missed, word, status } = this.state;

		return (
			<div className="App" >
				{
					!["won", "lost"].includes(status)
						? <Game guessed={guessed} missed={missed} word={word} updateState={this.updateState} />
						: <GameStatusBoard status={status} missed={missed} />
				}
			</div>
		)

	}

}

export default App;