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
  const { userId } = auth(); 

  
  if (!userId) {
    redirect("/sign-in");
  }

  
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
      userid: userId, 
    },
  });


  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children} 
    </>
  );
}
