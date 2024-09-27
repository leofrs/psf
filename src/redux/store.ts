import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import adminSlice from "./adminSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        admin: adminSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
