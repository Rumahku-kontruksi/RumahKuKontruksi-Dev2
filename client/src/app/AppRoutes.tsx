import { Routes, Route } from "react-router-dom";
import HomePage from "@/features/home/HomePage";
import PublicLayout from "@/layout/PublicLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
