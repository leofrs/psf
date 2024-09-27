import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: "admin",
    initialState: { value: false },
    reducers: {
        isadmin: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { isadmin } = adminSlice.actions;
export default adminSlice.reducer;
