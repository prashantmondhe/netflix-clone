import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    savedShows: [], // सुरुवातीला बुकमार्क्स रिकामे असतील
  },
  reducers: {
    // चित्रपट बुकमार्क करण्यासाठी
    addBookmark: (state, action) => {
      const show = action.payload;
      // जर तो चित्रपट आधीच नसेल, तरच लिस्टमध्ये जोडा
      const exists = state.savedShows.find(item => item.id === show.id);
      if (!exists) {
        state.savedShows.push(show);
      }
    },
    // चित्रपट बुकमार्क्समधून काढण्यासाठी
    removeBookmark: (state, action) => {
      const showId = action.payload;
      state.savedShows = state.savedShows.filter(item => item.id !== showId);
    }
  }
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;