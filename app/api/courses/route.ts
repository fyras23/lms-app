import { auth } from "@/auth";
import { db } from "@/lib/db";
import next from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request):  Promise<void | Response> {
  try {
    
    const user = await auth();
    const { title } = await req.json();
    const userId=user?.user?.id as string
    
    const course = await db.course.create({ data: { userId,title } });
    return new Response(JSON.stringify(course), { status: 200 });
  } catch (e) {
    console.log(e);
    return  new Response("error while reordering chapters" + e, {
      status: 500,
    });
  }
}

export async function PUT(req: Request, params: { courseId: string }):  Promise<void | Response>{
  try {
   
    const data = await req.json();
    

    const chapter = await db.chapter.updateMany({
      where: {
        position: parseInt(data.list.order),
      },
      data: {
        position: parseInt(data.list.order) + 1,
      },
    });
    const chpater2 = await db.chapter.updateMany({
      where: {
        id: data.list.id,
      },
      data: {
        position: parseInt(data.list.order),
      },
    });
    return new Response("chapters reordered", { status: 200 });
  } catch (error) {
    return new Response("error while reordering chapters" + error, {
      status: 500,
    });
  }
}

export async function GET(req: Request, params: { courseId: string }): Promise<void | Response> {
  try {
    const courses=  await db.course.findMany({
      
        })
    return new Response(JSON.stringify(courses), { status: 200 });
  } catch (error) {
    return new Response("error while fetching course" + error, {
      status: 500,
    });
  }
}
