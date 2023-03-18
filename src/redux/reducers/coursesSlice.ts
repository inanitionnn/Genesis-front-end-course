import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICourse } from "../../interfaces/course.interface";

interface coursesState {
  courses: ICourse[];
}

const initialState: coursesState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses(state, action: PayloadAction<ICourse[]>) {
      state.courses = action.payload;
    },
  },
});

export const { setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
