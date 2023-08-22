import { configureStore } from "@reduxjs/toolkit";
import currentSectionReducer from "./slices/current-section_slice";
import translationReducer from './slices/translation_slice';

const store = configureStore({
  reducer: {
    currentSection: currentSectionReducer,
    translation: translationReducer, 
  },
})

export type storeType = ReturnType<typeof store.getState>;
export default store;