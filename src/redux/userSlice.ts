import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: { value: true },
    reducers: {
        isUser: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { isUser } = userSlice.actions;
export default userSlice.reducer;
