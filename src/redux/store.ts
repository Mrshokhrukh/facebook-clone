// export const store =
import { configureStore } from "@reduxjs/toolkit";
import storyModalSlice from "./storyModalSlice";
import sidebarSlice from "./sidebarSlice";

export const store = configureStore({
  reducer: {
    storyModal: storyModalSlice,
    sidebar: sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
