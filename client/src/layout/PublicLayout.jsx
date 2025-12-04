import Navbar from "../components/navbar/Navbar";

export default function PublicLayout({ children }) {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-16">{children}</main>
        </div>
    );
}
