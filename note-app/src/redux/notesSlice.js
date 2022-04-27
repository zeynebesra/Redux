import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    search: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    searchFilter: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addNote, searchFilter } = notesSlice.actions;
export default notesSlice.reducer;
