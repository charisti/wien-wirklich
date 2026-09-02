import { NextRequest, NextResponse } from "next/server";
import { getVorschlaege } from "@/lib/data";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") ?? "";
  const vorschlaege = await getVorschlaege(q, 8);
  return NextResponse.json(vorschlaege);
}
