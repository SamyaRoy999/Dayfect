import prisma from "@/app/utils/connet";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Request Body:", body);
    const { title, description, date, completed, impotant } = body;

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "missing required fields",
        status: 400,
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed || false,
        IsImpotant: impotant || false,
      },
    });
    return NextResponse.json(task);
  } catch (error) {
    console.error("ERROR CREATING TASK:", error);
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
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
