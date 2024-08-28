// slices/companySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Company } from "@/types/company";

interface CompanyState {
  company: Company | null;
}

const initialState: CompanyState = {
  company: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompany(state, action: PayloadAction<Company>) {
      state.company = action.payload;
    },
    clearCompany(state) {
      state.company = null;
    },
  },
});

export const { setCompany, clearCompany } = companySlice.actions;
export default companySlice.reducer;
