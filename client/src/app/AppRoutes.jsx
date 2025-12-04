import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import HomePage from "../features/home/HomePage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
    );
}
