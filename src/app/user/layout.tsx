import "@/app/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profil Yönetimi",
  description: "Şirket profil yönetim sistemi",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-4 md:py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
