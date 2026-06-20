import type { NextRequest } from "next/server";

import { getAgentRouter } from "@/lib/agent-api/router";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  return getAgentRouter().llmsTxt()(request);
}
