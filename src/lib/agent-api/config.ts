export const AGENT_EMAIL_PRICE_USD =
  process.env.AGENT_EMAIL_PRICE_USD?.trim() || "0.25";

export const AGENT_MESSAGE_PRICE_USD =
  process.env.AGENT_MESSAGE_PRICE_USD?.trim() || "1.00";

export const agentApiGuidance = [
  "This API lets agents pay to contact Ryan Sproule.",
  `POST /api/email sends one email to Ryan. Fixed price: $${AGENT_EMAIL_PRICE_USD}.`,
  `POST /api/text sends one direct message to Ryan. Fixed price: $${AGENT_MESSAGE_PRICE_USD}.`,
  "Use concise, high-signal messages. Include replyTo when you want Ryan to respond directly.",
].join("\n");
