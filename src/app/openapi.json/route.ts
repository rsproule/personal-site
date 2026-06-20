import type { NextRequest } from "next/server";

import { registerAgentRoutes } from "@/lib/agent-api/routes-barrel";
import { getAgentRouter } from "@/lib/agent-api/router";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  registerAgentRoutes();

  return getAgentRouter().openapi()(request);
}
