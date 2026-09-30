import { NextResponse } from "next/server";
import { getZufallsEinzelbegriff } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET() {
  const wort = await getZufallsEinzelbegriff();
  if (!wort) {
    return NextResponse.json(
      { error: "Kein Begriff gefunden." },
      { status: 404 }
    );
  }
  return NextResponse.json(wort);
}
