import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    score: 0,
    cards: [],
  },
  reducers: {
    initialcards: (state) => {
      state.cards = [];
      for (let i = 1; i < 16; i++) {
        let card = {
          id: i,
          src: "/images/" + i + ".png",
          matched: false,
        };
        state.cards = [...state.cards, card];
      }
    },

    shufflecards: (state) => {
      const tmp = [...state.cards, ...state.cards]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
      state.cards = tmp;
    },

    matchedCards: (state, action) => {
      let card = action.payload;
      const newCards = state.cards.map((tmp) => {
        if (card.src === tmp.src) {
          return { ...tmp, matched: true };
        } else {
          return tmp;
        }
      });
      state.cards = newCards;
    },

    scoreUp: (state) => {
      state.score += 50;
    },

    scoreDown: (state) => {
      state.score -= 10;
    },

    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const {
  initialcards,
  shufflecards,
  matchedCards,
  scoreDown,
  scoreUp,
  resetScore,
} = gameSlice.actions;
export default gameSlice.reducer;
