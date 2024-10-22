import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId } = auth();  // Pastikan Clerk auth bekerja dan mengembalikan userId
    const body = await req.json();

    const { name } = body;

    
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Nama toko perlu diinput", { status: 400 });
    }

    
    const store = await db.store.create({
      data: {
        name,
        userid: userId,  
      },
    });

    return NextResponse.json(store); 
  } catch (error) {
    console.error("[STORES_POST]", error);  
    return new NextResponse("Internal error", { status: 500 });  
  }
}
