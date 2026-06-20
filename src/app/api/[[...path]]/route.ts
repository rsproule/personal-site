import type { NextRequest } from "next/server";

import { getAgentRouter } from "@/lib/agent-api/router";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function notFound(request: NextRequest) {
  return getAgentRouter().notFound()(request);
}

export const GET = notFound;
export const POST = notFound;
export const DELETE = notFound;
export const PUT = notFound;
export const PATCH = notFound;
