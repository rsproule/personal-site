import { z } from "zod";

export const emailRequestSchema = z
  .object({
    subject: z.string().trim().min(1).max(120),
    message: z.string().trim().min(1).max(4000),
    fromName: z.string().trim().min(1).max(80).optional(),
    replyTo: z.string().trim().email().optional(),
    ccReplyTo: z.boolean().optional(),
  })
  .refine((body) => !body.ccReplyTo || Boolean(body.replyTo), {
    path: ["ccReplyTo"],
    message: "ccReplyTo requires replyTo",
  });

export const directMessageRequestSchema = z.object({
  message: z.string().trim().min(1).max(500),
  fromName: z.string().trim().min(1).max(80).optional(),
  replyTo: z.string().trim().max(120).optional(),
});

export const contactResponseSchema = z.object({
  ok: z.literal(true),
  channel: z.enum(["email", "direct_message"]),
  id: z.string(),
});

export type EmailRequest = z.infer<typeof emailRequestSchema>;
export type DirectMessageRequest = z.infer<typeof directMessageRequestSchema>;
