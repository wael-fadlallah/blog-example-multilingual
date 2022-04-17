import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      isLoggedin: false,
      language: "en",
    },
  },
  reducers: {
    set: (state) => {
      state;
    },
  },
});

export const { set } = userSlice.actions;
export default userSlice.reducer;