import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import i18n from "../../libraries/i18next";

interface TranslationState {
  selectedLanguage: string;
}

const initialState: TranslationState = {
  selectedLanguage: "pt",
  // selectedLanguage: i18n.language.slice(0, 2),
};

const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { setLanguage } = translationSlice.actions;

export const changeLanguage = (newLanguage: string) => {
  return setLanguage(newLanguage);
};

export default translationSlice.reducer;
