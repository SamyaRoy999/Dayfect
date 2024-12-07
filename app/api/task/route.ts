import { NextResponse } from "next/server";

export async function POST() {
  try {
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
