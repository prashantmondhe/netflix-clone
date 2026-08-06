import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    savedShows: [], 
  },
  reducers: {
    
    addBookmark: (state, action) => {
      const show = action.payload;
      
      const exists = state.savedShows.find(item => item.id === show.id);
      if (!exists) {
        state.savedShows.push(show);
      }
    },
    
    removeBookmark: (state, action) => {
      const showId = action.payload;
      state.savedShows = state.savedShows.filter(item => item.id !== showId);
    }
  }
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;