import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  //actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    //action .payload input girilen değeri almak için
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

//yazılan fonk dışa aktarılır.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
