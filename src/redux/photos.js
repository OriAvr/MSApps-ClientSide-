import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
  page: 1,
  searchWord: "people",
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    setPhotos(state, action) {
      state.photos = action.payload;
    },
    setSearchWord(state, action) {
      if (action.payload === "") state.searchWord = "people";
      else state.searchWord = action.payload;
    },
    nextPage(state) {
      state.page++;
    },
    previousPage(state) {
      if (state.page > 1) state.page--;
    },
  },
});

export const photoActions = photoSlice.actions;
export default photoSlice.reducer;
