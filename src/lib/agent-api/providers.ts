import { HttpError } from "@agentcash/router";
import { Resend } from "resend";

import type { DirectMessageRequest, EmailRequest } from "./schemas";

function requireEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new HttpError(`${name} is not configured`, 503);
  }

  return value;
}

function requireEmailRecipients(name: string) {
  const recipients = requireEnv(name)
    .split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean);

  if (recipients.length === 0) {
    throw new HttpError(`${name} is not configured`, 503);
  }

  return recipients.length === 1 ? recipients[0] : recipients;
}

export function assertEmailConfigured() {
  requireEnv("RESEND_API_KEY");
  requireEnv("RESEND_FROM_EMAIL");
  requireEmailRecipients("RYAN_EMAIL_TO");
}

export function assertDirectMessageConfigured() {
  requireEnv("TELEGRAM_BOT_TOKEN");
  requireEnv("RYAN_TELEGRAM_CHAT_ID");
}

export async function sendEmailToRyan(
  body: EmailRequest,
  wallet: string | null,
) {
  assertEmailConfigured();

  const resend = new Resend(requireEnv("RESEND_API_KEY"));
  const from = requireEnv("RESEND_FROM_EMAIL");
  const to = requireEmailRecipients("RYAN_EMAIL_TO");

  const sender = body.fromName ?? "Agent";
  const replyLine = body.replyTo ? `Reply-to: ${body.replyTo}\n` : "";
  const ccLine =
    body.ccReplyTo && body.replyTo ? `CC'd sender: ${body.replyTo}\n` : "";
  const walletLine = wallet ? `Payer wallet: ${wallet}\n` : "";

  const { data, error } = await resend.emails.send({
    from,
    to,
    cc: body.ccReplyTo && body.replyTo ? body.replyTo : undefined,
    replyTo: body.replyTo,
    subject: `[Agent] ${body.subject}`,
    text: [
      `Paid agent message from ${sender}.`,
      "",
      replyLine + ccLine + walletLine,
      body.message,
    ].join("\n"),
  });

  if (error) {
    throw new HttpError(error.message, 502);
  }

  return data?.id ?? "sent";
}

export async function sendDirectMessageToRyan(
  body: DirectMessageRequest,
  wallet: string | null,
) {
  assertDirectMessageConfigured();

  const sender = body.fromName ?? "Agent";
  const replyLine = body.replyTo ? `Reply: ${body.replyTo}` : "";
  const walletLine = wallet ? `Payer wallet: ${wallet}` : "";
  const text = [
    `Paid agent direct message from ${sender}.`,
    "",
    body.message,
    "",
    replyLine,
    walletLine,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${requireEnv("TELEGRAM_BOT_TOKEN")}/sendMessage`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        chat_id: requireEnv("RYAN_TELEGRAM_CHAT_ID"),
        text,
        disable_web_page_preview: true,
      }),
    },
  );

  const result = (await response.json().catch(() => null)) as {
    ok?: boolean;
    description?: string;
    result?: { message_id?: number };
  } | null;

  if (!response.ok || !result?.ok) {
    throw new HttpError(
      result?.description ?? "Telegram message failed",
      response.ok ? 502 : response.status,
    );
  }

  return String(result.result?.message_id ?? "sent");
}
