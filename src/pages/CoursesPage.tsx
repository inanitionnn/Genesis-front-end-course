import { useEffect, useState } from "react";
import { useLazyFetchAllCoursesQuery } from "../redux/services/coursesApi";
import { useAppDispatch, useAppSelector } from "../redux/tsHook";
import { setCourses } from "../redux/reducers/coursesSlice";
import { useFetchTokenQuery } from "../redux/services/authApi";
import { setToken } from "../redux/reducers/authSlice";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";
import Pagination from "../components/Pagination";
import CourseCard from "../components/CourseCard";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function CoursesPage() {
  const dispatch = useAppDispatch();
  const { data: token, isFetching: isTokenFetching } = useFetchTokenQuery();
  const [
    fetchCourses,
    { data: courses, isLoading: isCoursesLoading, status: coursesStatus },
  ] = useLazyFetchAllCoursesQuery();

  const coursesState = useAppSelector((state) => state.courses.courses);

  useEffect(() => {
    if (token) {
      dispatch(setToken(token.token));
      fetchCourses();
    }
  }, [token, dispatch, fetchCourses]);

  useEffect(() => {
    if (coursesStatus === QueryStatus.fulfilled && courses) {
      dispatch(setCourses(courses.courses));
    }
  }, [coursesStatus, courses, dispatch]);

  // Pagination
  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [currentPage, setCurrentPage] = useState(0);
  const [coursesPerPage, setCoursesPerPage] = useState(10);
  const totalPages = Math.ceil(coursesState.length / coursesPerPage);

  const indexOfLastCourse = (currentPage + 1) * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = coursesState.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  return (
    <>
      <Link to={`/`} className="my-4 mx-36 flex items-center justify-center">
        <h1 className="text-3xl font-medium italic mr-3 underline decoration-wavy decoration-3 decoration-indigo-500">
          Expand Your Horizons with
        </h1>
        <svg
          width="140"
          viewBox="0 0 800 337"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M205.42 293.958C194.987 286.284 180.258 288.455 172.523 298.808C164.789 309.161 166.977 323.776 177.411 331.451C187.845 339.126 202.574 336.955 210.309 326.601C218.043 316.248 215.855 301.633 205.42 293.958Z"
            fill="#433298"
          />
          <path
            d="M164.905 245.651C143.028 229.559 112.145 234.112 95.9266 255.82C79.709 277.529 84.2972 308.173 106.176 324.265C128.053 340.357 158.936 335.804 175.154 314.096C191.372 292.387 186.783 261.743 164.905 245.651Z"
            fill="#FFBC0F"
          />
          <path
            d="M29.7573 225.509C62.3926 249.515 108.46 242.723 132.653 210.34C156.845 177.958 150.001 132.246 117.365 108.24C84.7299 84.2357 38.6623 91.0274 14.47 123.41C-9.72237 155.793 -2.87802 201.504 29.7573 225.509Z"
            fill="#FE803C"
          />
          <path
            d="M84.969 111.678C107.065 127.93 138.256 123.332 154.636 101.407C171.016 79.4817 166.381 48.5324 144.285 32.2794C122.189 16.0264 90.9979 20.6246 74.6186 42.5499C58.2385 64.475 62.8728 95.4249 84.969 111.678Z"
            fill="#EA5F47"
          />
          <path
            d="M176.509 42.0796C186.942 49.7538 201.669 47.5827 209.404 37.2302C217.138 26.8778 214.95 12.2643 204.517 4.5901C194.083 -3.0841 179.356 -0.912927 171.622 9.43951C163.888 19.7919 166.076 34.4054 176.509 42.0796Z"
            fill="#4EA99C"
          />
          <path
            d="M311.057 165.07V171.889C311.057 185.527 306.559 196.702 297.561 205.415C288.564 214.034 276.821 218.343 262.33 218.343C246.988 218.343 234.297 213.371 224.258 203.426C214.314 193.482 209.342 181.265 209.342 166.775C209.342 152.379 214.314 140.209 224.258 130.265C234.297 120.226 246.704 115.207 261.478 115.207C270.759 115.207 279.236 117.338 286.907 121.6C294.578 125.861 300.545 131.591 304.806 138.789L290.742 146.886C288.091 142.151 284.16 138.363 278.951 135.521C273.743 132.586 267.918 131.118 261.478 131.118C251.06 131.118 242.489 134.527 235.765 141.346C229.041 148.165 225.679 156.688 225.679 166.917C225.679 177.145 229.041 185.621 235.765 192.346C242.584 199.07 251.486 202.432 262.472 202.432C271.28 202.432 278.431 200.396 283.924 196.323C289.511 192.156 293.063 186.616 294.578 179.702H261.336V165.07H311.057Z"
            fill="black"
          />
          <path
            d="M349.432 200.869H393.471V216.496H333.095V117.054H392.761V132.68H349.432V158.535H389.209V174.02H349.432V200.869Z"
            fill="black"
          />
          <path
            d="M475.195 117.054H491.532V216.496H478.746L431.866 149.017V216.496H415.529V117.054H428.315L475.195 184.532V117.054Z"
            fill="black"
          />
          <path
            d="M534.832 200.869H578.871V216.496H518.496V117.054H578.161V132.68H534.832V158.535H574.609V174.02H534.832V200.869Z"
            fill="black"
          />
          <path
            d="M634.03 218.343C624.464 218.343 616.319 216.165 609.595 211.808C602.966 207.451 598.325 201.485 595.673 193.908L609.737 185.669C613.715 196.844 621.954 202.432 634.456 202.432C640.612 202.432 645.205 201.248 648.236 198.88C651.361 196.418 652.924 193.245 652.924 189.362C652.924 185.29 651.266 182.212 647.951 180.128C644.637 177.95 638.765 175.583 630.336 173.025C625.601 171.605 621.765 170.279 618.829 169.048C615.893 167.817 612.768 166.112 609.453 163.934C606.233 161.661 603.818 158.867 602.208 155.552C600.598 152.237 599.793 148.354 599.793 143.903C599.793 135.095 602.918 128.134 609.169 123.02C615.42 117.811 622.949 115.207 631.757 115.207C639.712 115.207 646.673 117.148 652.639 121.031C658.606 124.914 663.199 130.265 666.419 137.084L652.639 145.04C648.472 135.758 641.511 131.118 631.757 131.118C627.021 131.118 623.233 132.254 620.392 134.527C617.551 136.705 616.13 139.689 616.13 143.477C616.13 147.17 617.551 150.106 620.392 152.285C623.328 154.368 628.584 156.594 636.16 158.961C639.949 160.193 642.695 161.14 644.4 161.803C646.199 162.371 648.662 163.318 651.787 164.644C655.007 165.97 657.422 167.296 659.032 168.622C660.642 169.947 662.347 171.605 664.146 173.594C666.041 175.583 667.366 177.855 668.124 180.413C668.882 182.97 669.261 185.858 669.261 189.078C669.261 198.075 665.993 205.226 659.458 210.529C653.018 215.738 644.542 218.343 634.03 218.343Z"
            fill="black"
          />
          <path
            d="M689.745 117.054H706.082V216.496H689.745V117.054Z"
            fill="black"
          />
          <path
            d="M764.77 218.343C755.204 218.343 747.059 216.165 740.335 211.808C733.706 207.451 729.065 201.485 726.413 193.908L740.477 185.669C744.455 196.844 752.695 202.432 765.196 202.432C771.352 202.432 775.945 201.248 778.976 198.88C782.101 196.418 783.664 193.245 783.664 189.362C783.664 185.29 782.006 182.212 778.692 180.128C775.377 177.95 769.505 175.583 761.076 173.025C756.341 171.605 752.505 170.279 749.569 169.048C746.633 167.817 743.508 166.112 740.193 163.934C736.973 161.661 734.558 158.867 732.948 155.552C731.338 152.237 730.533 148.354 730.533 143.903C730.533 135.095 733.658 128.134 739.909 123.02C746.16 117.811 753.689 115.207 762.497 115.207C770.452 115.207 777.413 117.148 783.38 121.031C789.346 124.914 793.939 130.265 797.159 137.084L783.38 145.04C779.212 135.758 772.252 131.118 762.497 131.118C757.761 131.118 753.973 132.254 751.132 134.527C748.291 136.705 746.87 139.689 746.87 143.477C746.87 147.17 748.291 150.106 751.132 152.285C754.068 154.368 759.324 156.594 766.901 158.961C770.689 160.193 773.435 161.14 775.14 161.803C776.94 162.371 779.402 163.318 782.527 164.644C785.747 165.97 788.162 167.296 789.772 168.622C791.382 169.947 793.087 171.605 794.887 173.594C796.781 175.583 798.107 177.855 798.864 180.413C799.622 182.97 800.001 185.858 800.001 189.078C800.001 198.075 796.733 205.226 790.199 210.529C783.758 215.738 775.282 218.343 764.77 218.343Z"
            fill="black"
          />
        </svg>
      </Link>
      <div className="flex justify-center ml-52">
        {isCoursesLoading && <InfinitySpin width="400" color="#EA5F47" />}
      </div>
      <div className="container mx-auto">
        <div className="mx-auto w-5/6 flex flex-wrap">
          {courses &&
            currentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </div>
      </div>
      {coursesStatus === QueryStatus.fulfilled && (
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageClick}
          totalPages={totalPages}
        />
      )}
    </>
  );
}
