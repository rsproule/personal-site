import type { NextRequest } from "next/server";

import { AGENT_EMAIL_PRICE_USD } from "@/lib/agent-api/config";
import {
  assertEmailConfigured,
  sendEmailToRyan,
} from "@/lib/agent-api/providers";
import { getAgentRouter } from "@/lib/agent-api/router";
import {
  contactResponseSchema,
  emailRequestSchema,
} from "@/lib/agent-api/schemas";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

let postHandler: ((request: NextRequest) => Promise<Response>) | null = null;

export function getEmailPostHandler() {
  if (!postHandler) {
    postHandler = getAgentRouter()
      .route({ path: "email" })
      .paid(AGENT_EMAIL_PRICE_USD)
      .provider("resend")
      .body(emailRequestSchema)
      .output(contactResponseSchema)
      .inputExample({
        subject: "Quick intro",
        message: "Ryan, I found your work and would like to compare notes.",
        fromName: "Example Agent",
        replyTo: "agent@example.com",
        ccReplyTo: true,
      })
      .outputExample({
        ok: true,
        channel: "email",
        id: "email-id",
      })
      .description("Send one paid email message to Ryan Sproule.")
      .validate(() => {
        assertEmailConfigured();
      })
      .handler(async ({ body, wallet }) => {
        const id = await sendEmailToRyan(body, wallet);

        return {
          ok: true,
          channel: "email",
          id,
        };
      });
  }

  return postHandler;
}

export function POST(request: NextRequest) {
  return getEmailPostHandler()(request);
}
