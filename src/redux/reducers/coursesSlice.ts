import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICourse } from "../../interfaces/course.interface";
import { ICourseWithLessons } from "../../interfaces/courseWithLessons.interface";

interface coursesState {
  courses: ICourse[];
  courseWithLessons: ICourseWithLessons[];
}

const initialState: coursesState = {
  courses: [],
  courseWithLessons: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses(state, action: PayloadAction<ICourse[]>) {
      state.courses = action.payload;
    },
    setCourseWithLessons(state, action: PayloadAction<ICourseWithLessons>) {
      state.courseWithLessons.push(action.payload);
    },
  },
});

export const { setCourses, setCourseWithLessons } = coursesSlice.actions;
export default coursesSlice.reducer;
