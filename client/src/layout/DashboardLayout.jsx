import Sidebar from "../components/sidebar/Sidebar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-6 bg-gray-50">{children}</main>
        </div>
    );
}
