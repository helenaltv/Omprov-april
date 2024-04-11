import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: [],
};

const Slice = createSlice({
  textarea: "text",
  initialState,
  reducers: {
    addText: (state, action) => {
      state.Read.push(action.payload);
    },
  },
});

export default Slice.reducer;
