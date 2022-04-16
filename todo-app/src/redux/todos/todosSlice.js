import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "Learn React",
        completed: true,
      },
      {
        id: "2",
        title: "Learn Redux",
        completed: false,
      },
      {
        id: "3",
        title: "Learn Node.js",
        completed: true,
      },
    ],
  },
  reducers: {},
});

export default todosSlice.reducer;
