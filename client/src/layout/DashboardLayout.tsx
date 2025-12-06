type TDashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: TDashboardLayoutProps) {
  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
