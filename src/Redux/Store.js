import { configureStore } from '@reduxjs/toolkit';
// आपण थोड्या वेळात bookmarkSlice बनवू, तो इथे import करू
import bookmarkReducer from './bookmarkSlice';

export const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer, // बुकमार्क्सचा डेटा इथे स्टोअर होईल
  },
});