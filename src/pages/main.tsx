import { useEffect } from "react";
import { useLazyFetchAllCoursesQuery } from "../redux/services/coursesApi";
import { useAppDispatch, useAppSelector } from "../redux/tsHook";
import { setCourses } from "../redux/reducers/coursesSlice";
import CourseCard from "../components/courseCard";
import { useFetchTokenQuery } from "../redux/services/authApi";
import { setToken } from "../redux/reducers/authSlice";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";
import Video from "../components/video";

export default function Main() {
  const dispatch = useAppDispatch();
  const { data: token, isFetching: isTokenFetching } = useFetchTokenQuery();
  const [
    fetchCourses,
    { data: courses, isFetching: isCoursesFetching, status, error },
  ] = useLazyFetchAllCoursesQuery();

  const coursesState = useAppSelector((state) => state.courses.courses);

  useEffect(() => {
    if (token) {
      dispatch(setToken(token.token));
      fetchCourses();
    }
  }, [token, dispatch, fetchCourses]);

  useEffect(() => {
    if (status === QueryStatus.fulfilled && courses) {
      dispatch(setCourses(courses.courses));
    }
  }, [status, courses, dispatch]);
  return (
    <>
      <div>Main page</div>
      {isTokenFetching && <div>Loading token...</div>}
      {isCoursesFetching && <div>Loading courses...</div>}
      {courses &&
        coursesState.map((course) => <Video key={course.id} course={course} />)}
      {/* {courses &&
        coursesState.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))} */}
    </>
  );
}
