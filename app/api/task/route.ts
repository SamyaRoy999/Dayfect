import prisma from "@/app/utils/connet";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const { title, description, date, completed, impotant } = await req.json();
    if (!title || !description || !date) {
      return NextResponse.json({ error: "missing requerd fild", status: 500 });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        IsImpotant: impotant,
      },
    });
    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR CREATEING TASK", error);
    return NextResponse.json({ error: "ERROR CREATEING TASK", status: 500 });
  }
}
export async function GET() {
  try {
  } catch (error) {
    console.log("ERROR GATTING TASK", error);
    return NextResponse.json({ error: "ERROR GATTING TASK", status: 500 });
  }
}

export async function PUT() {
  try {
  } catch (error) {
    console.log("ERROR UPDATEING TASK", error);
    return NextResponse.json({ error: "ERROR UPDATEING TASK", status: 500 });
  }
}

export async function DELETE() {
  try {
  } catch (error) {
    console.log("ERROR DELETEING TASK", error);
    return NextResponse.json({ error: "ERROR DELETEING TASK", status: 500 });
  }
}
