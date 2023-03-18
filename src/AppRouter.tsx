import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import CoursePage from "./pages/coursePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:courseId" element={<CoursePage />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}
