import React from "react";
import { Route, Routes } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage";
import LessonsPage from "./pages/LessonsPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<CoursesPage />} />
      <Route path="/:courseId" element={<LessonsPage />} />
      <Route path="*" element={<CoursesPage />} />
    </Routes>
  );
}
