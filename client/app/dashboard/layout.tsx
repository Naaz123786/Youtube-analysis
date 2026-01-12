import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#050505]">
            <Sidebar />
            <main className="pl-72 pr-8 pt-8">
                {children}
            </main>
        </div>
    );
}
