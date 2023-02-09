import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    signedInAs: "",
  },
  reducers: {
    signedAsReducer: (state, action) => {
      state.signedInAs = action.payload;
    },
  },
});

export const { signedAsReducer } = loginSlice.actions;
export default loginSlice;
