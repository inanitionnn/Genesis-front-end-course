import React from "react";
import { ICourseWithLessons } from "../interfaces/courseWithLessons.interface";
interface LessonImageProps {
  course: ICourseWithLessons;
  order: number;
  lessonOrder: number;
  onChange: (order: number) => void;
}
export default function LessonImage(props: LessonImageProps) {
  const { onChange, order, course, lessonOrder } = props;
  return (
    <>
      <button onClick={() => onChange(order)}>
        {/* {lessonOrder == order ? : } */}
        <img
          className={`rounded-lg w-96 ${
            lessonOrder == order
              ? "invert opacity-80 border border-4 border-indigo-500 border-solid"
              : ""
          }`}
          src={
            course.lessons[order].previewImageLink + `/lesson-${order + 1}.webp`
          }
          alt={'image of "' + course.lessons[order].title + '" lesson'}
        />
        <div className="flex items-center justify-center mb-4">
          <h3 className="text-lg font-medium mr-2">
            {course.lessons[order].title}
          </h3>
          {course.lessons[order].status == "locked" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          ) : (
            <></>
          )}
        </div>
      </button>
    </>
  );
}
