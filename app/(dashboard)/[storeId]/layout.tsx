import Navbar from "@/components/navbar";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: { storeId: string };
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  const { userId } = auth(); // Ambil userId dari Clerk auth

  // Jika userId tidak ada, redirect ke halaman sign-in
  if (!userId) {
    redirect("/sign-in");
  }

  // Cari store berdasarkan id dan userId
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
      userid: userId, // Pastikan menggunakan userid sesuai dengan model Prisma
    },
  });

  // Jika store tidak ditemukan, redirect ke home
  if (!store) {
    redirect("/");
  }

  // Render layout dashboard
  return (
    <>
      <Navbar />
      {children} 
    </>
  );
}
