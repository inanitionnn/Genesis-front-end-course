import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICourseWithLessons } from "../../interfaces/courseWithLessons.interface";
import { Constants } from "../../constants/constants";
import { ICourse } from "../../interfaces/course.interface";
import { RootState } from "../store";

export const coursesApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: Constants.BASE_URL + "/core",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    fetchCourseById: build.query<ICourseWithLessons, string>({
      query: (id) => ({
        url: `preview-courses/${id}`,
        method: "GET",
      }),
    }),
    fetchAllCourses: build.query<{ courses: ICourse[] }, void>({
      query: () => ({
        url: `preview-courses`,
        method: "GET",
      }),
    }),
  }),
});
export const { useLazyFetchAllCoursesQuery, useFetchCourseByIdQuery } =
  coursesApi;
