import { createRouterFromEnv, type ServiceRouter } from "@agentcash/router";

import { agentApiGuidance } from "./config";

let agentRouter: ServiceRouter | null = null;

export function getAgentRouter() {
  if (!agentRouter) {
    agentRouter = createRouterFromEnv({
      title: "Ryan Sproule Agent API",
      version: "1.0.0",
      description:
        "Paid API routes for agents that need to contact Ryan Sproule by email or direct message.",
      guidance: agentApiGuidance,
      contact: {
        name: "Ryan Sproule",
        url: "https://ryansproule.com",
      },
      strictRoutes: true,
    });
  }

  return agentRouter;
}
