import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    repositories: [],
    status: "loading"
  },
  reducers: {
    fetchRepositories: state => {
      state.status = "loading"
    },
    fetchRepositoriesSuccess: state => {
      state.status = "success"
    },
    fetchRepositoriesError: state => {
      state.status = "error"
    },
  }
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError
} = homepageSlice.actions;

const selectHomepageSlice = state => state.homepage;
export const selectStatus = state => selectHomepageSlice(state).status;


export default homepageSlice.reducer;