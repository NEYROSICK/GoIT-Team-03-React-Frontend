import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  searchCategory: 'sell',
};
const noticeSlice = createSlice({
  name: 'noticeSlice',
  initialState,
  reducers: {
    setSearchCategory: (state, action) => {
      state.searchCategory = action.payload;
    },
  },
});
export const { setSearchCategory } = noticeSlice.actions;
export default noticeSlice.reducer;
