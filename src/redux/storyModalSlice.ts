import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { stories } from "../assets/data/stories";

type StoryDataType = {
  title: string;
  id: number;
  storyImg: string;
  profileImg: string;
};

type InitialStateType = {
  isOpen: boolean;
  storyData: StoryDataType | undefined;
};

const initialState: InitialStateType = {
  isOpen: false,
  storyData: undefined,
};
export const storyModalSlice = createSlice({
  name: "storyModal",
  initialState,
  reducers: {
    openStoryModal: (state, action: PayloadAction<number>) => {
      state.isOpen = true;
      const singleData = stories.find((item) => item.id === action.payload);
      state.storyData = singleData;
    },
    closeStoryModal: (state) => {
      state.isOpen = false;
    },
  },
  //   extraReducers: {},
});
export const { openStoryModal, closeStoryModal } = storyModalSlice.actions;
export default storyModalSlice.reducer;
