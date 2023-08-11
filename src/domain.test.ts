import { describe, it } from "vitest"

import type { word, history, score } from './domain'
import { computeScore, computeStatus, push, alreadyContained } from './domain';

describe("testing history", () => {
    let h: history = [];
    const a = "A";

    it("create an empty history and add an element to it", ({ expect }) => {
        h = push(h, a)
        expect(h.length).toBe(1)
    })

    it("throws when adding two A", ({ expect }) => {
        expect(() => push(h, a)).toThrow(alreadyContained)
        expect(h.length).toBe(1)
    })

})

describe("testing score", () => {
    const w: word = "HANGMAN";

    it("test that empty history means empty score", ({ expect }) => {
        let h: history = [];

        const { missed, found } = computeScore(w, h)

        expect(missed).toBe(0)
        expect(found).toBe(0)
    })


    it("test that found is 1 when letter appears only once", ({ expect }) => {
        let h: history = [];
        h = push(h, "H")

        const { missed, found } = computeScore(w, h)

        expect(missed).toBe(0)
        expect(found).toBe(1)
    })

    it("test that found is 2 when letter appears twice", ({ expect }) => {
        let h: history = [];
        h = push(h, "N")

        const { missed, found } = computeScore(w, h)

        expect(missed).toBe(0)
        expect(found).toBe(2)
    })

    it("test that found is 2 when two letters appears once", ({ expect }) => {
        let h: history = [];
        h = push(h, "H")
        h = push(h, "G")

        const { missed, found } = computeScore(w, h)

        expect(missed).toBe(0)
        expect(found).toBe(2)
    })

    it("more complex scenario with fails and success", ({ expect }) => {
        let h: history = [];

        // success
        h = push(h, "H")
        h = push(h, "G")

        // fails
        h = push(h, "U")
        h = push(h, "E")

        const { missed, found } = computeScore(w, h)

        expect(missed).toBe(2)
        expect(found).toBe(2)
    })

})

describe("testing status", () => {
    const w: word = "HANGMAN";

    it("says nothing, status is empty", ({ expect }) => {
        const score: score = {
            missed: 0,
            found: 0
        };

        const status = computeStatus(score, w);
        expect(status).to.be.empty
    })

    it("says nothing, status is empty even if score is not", ({ expect }) => {
        const score: score = {
            missed: 5,
            found: w.length - 1
        };

        const status = computeStatus(score, w);
        expect(status).to.be.empty

    })

    it("says status is nothing when too many letters were found", ({ expect }) => {
        const score: score = {
            missed: 0,
            found: w.length + 1
        };

        const status = computeStatus(score, w);
        expect(status).to.be.empty

    })

    it("says status is 'won' when all letters are found", ({ expect }) => {
        const score: score = {
            missed: 5,
            found: w.length
        };

        const status = computeStatus(score, w);
        expect(status).toBe("won")

    })

    it("says status is 'lost' when too many mistakes were made", ({ expect }) => {
        const score: score = {
            missed: 6,
            found: w.length
        };

        const status = computeStatus(score, w);
        expect(status).toBe("lost")

    })

    it("says status is 'lost' even when all letters are found if too many mistakes were made", ({ expect }) => {
        const score: score = {
            missed: 6,
            found: w.length
        };

        const status = computeStatus(score, w);
        expect(status).toBe("lost")

    })
})

describe("integration test", () => {
    const w: word = "HANGMAN";

    it("test that status is won if all letters happen to be found", ({ expect }) => {
        let h: history = [];
        h = push(h, "H")
        h = push(h, "A")
        h = push(h, "N")
        h = push(h, "G")
        h = push(h, "M")

        const score = computeScore(w, h)
        const status = computeStatus(score, w);

        expect(score.missed).toBe(0)
        expect(score.found).toBe(w.length)

        expect(status).toBe("won")

    })
})