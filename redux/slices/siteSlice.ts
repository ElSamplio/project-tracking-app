// slices/projectSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Site } from "@/types/site";

interface SiteState {
  site: Site | null;
}

const initialState: SiteState = {
  site: null,
};

const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    setSite(state, action: PayloadAction<Site>) {
      state.site = action.payload;
    },
    clearSite(state) {
      state.site = null;
    },
  },
});

export const { setSite, clearSite } = siteSlice.actions;
export default siteSlice.reducer;
