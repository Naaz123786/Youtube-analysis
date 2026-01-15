import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#050505]">
            <Header />
            <Sidebar />
            <main className="pl-72 pr-8 pt-[104px]">
                {children}
            </main>
        </div>
    );
}
