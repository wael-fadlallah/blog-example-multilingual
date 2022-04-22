import { createSlice } from "@reduxjs/toolkit";
import local from "../../service/localStorage";

const userSlice = createSlice({
  name: "user",
  initialState: local.get()
    ? local.get()
    : {
        user: {
          isLoggedin: false,
          language: "en",
        },
      },
  reducers: {
    set: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { set } = userSlice.actions;
export default userSlice.reducer;
