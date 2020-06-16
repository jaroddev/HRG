import React from 'react';
import './App.css';
import GameStatusBoard from './GameStatusBoard';
import KeyBoard from './Keyboard';
import Counter from './Counter';
import Word from './Word';


class App extends React.Component {

	static MAX_TRIALS = 8;

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
				<GameStatusBoard status={status} />
				<Counter missed={missed} />
				<Word guessed={guessed} word={word} />
				<KeyBoard parentBehavior={this.updateState} />
			</div>
		)
	}

}

export default App;