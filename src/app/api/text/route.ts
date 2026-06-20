import type { NextRequest } from "next/server";

import { AGENT_MESSAGE_PRICE_USD } from "@/lib/agent-api/config";
import {
  assertDirectMessageConfigured,
  sendDirectMessageToRyan,
} from "@/lib/agent-api/providers";
import { getAgentRouter } from "@/lib/agent-api/router";
import {
  contactResponseSchema,
  directMessageRequestSchema,
} from "@/lib/agent-api/schemas";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

let postHandler: ((request: NextRequest) => Promise<Response>) | null = null;

export function getTextPostHandler() {
  if (!postHandler) {
    postHandler = getAgentRouter()
      .route({ path: "text" })
      .paid(AGENT_MESSAGE_PRICE_USD)
      .provider("telegram")
      .body(directMessageRequestSchema)
      .output(contactResponseSchema)
      .inputExample({
        message: "Ryan, can you take a quick look at this?",
        fromName: "Example Agent",
        replyTo: "agent@example.com",
      })
      .outputExample({
        ok: true,
        channel: "direct_message",
        id: "123",
      })
      .description("Send one paid direct message to Ryan Sproule.")
      .validate(() => {
        assertDirectMessageConfigured();
      })
      .handler(async ({ body, wallet }) => {
        const id = await sendDirectMessageToRyan(body, wallet);

        return {
          ok: true,
          channel: "direct_message",
          id,
        };
      });
  }

  return postHandler;
}

export function POST(request: NextRequest) {
  return getTextPostHandler()(request);
}
