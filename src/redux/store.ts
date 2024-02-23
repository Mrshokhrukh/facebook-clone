// export const store =
import { configureStore } from "@reduxjs/toolkit";
import storyModalSlice from "./storyModalSlice";

export const store = configureStore({
  reducer: {
    storyModal: storyModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
