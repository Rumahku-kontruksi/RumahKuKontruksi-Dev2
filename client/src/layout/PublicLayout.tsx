import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function PublicLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
