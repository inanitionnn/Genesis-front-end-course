import React from "react";
import { ICourse } from "../interfaces/course.interface";

interface ICourseCardProps {
  course: ICourse;
}

export default function CourseCard(props: ICourseCardProps) {
  const { course } = props;
  return (
    <>
      <img
        src={course.previewImageLink + "/cover.webp"}
        alt={course.meta.slug}
      />
      <div>{course.title}</div>
      <div>{course.lessonsCount}</div>
      <div>{course.meta.skills}</div>
      <div>{course.rating}</div>
    </>
  );
}
