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

export type Letter = typeof letters[number];

export type word = string;

export type score = {
    missed: number,
    found: number
};

const statusList = ["", "won", "lost"] as const;
export type status = typeof statusList[number];

export const alreadyContained = new Error('value is already in history');
export function push(history: Letter[], letter: Letter): Letter[] {
    if (history.includes(letter)) {
        // should we really throw an exception here??
        // we could just return the original array
        throw alreadyContained;
    }

    return [
        ...history,
        letter
    ];
}

export function computeScore(word: word, history: Letter[]): score {
    const freq = new Map<Letter, number>();
    let found = 0;
    let missed = 0;

    // counting frequency
    for (const letter of word) {
        freq.set(letter as Letter, (freq.get(letter as Letter) || 0) + 1);
    }

    // computing the score
    for (const letter of history) {
        if (freq.has(letter)) {
            found += freq.get(letter)!;
            freq.delete(letter);
        } else {
            missed++;
        }
    }

    return { found, missed };
}

const MAX_MISTAKES = 6;
export function computeStatus(score: score, word: word): status {
    if (score.missed > MAX_MISTAKES - 1) {
        return "lost";
    }

    if (score.found === word.length) {
        return "won";
    }

    return ""
}