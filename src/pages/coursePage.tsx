import React from "react";
import { Link, useParams } from "react-router-dom";

export default function CoursePage() {
  const params = useParams();
  return (
    <>
      <div>
        <Link to="/">Main</Link>
      </div>
      <div>CoursePage {params.courseId}</div>
    </>
  );
}
