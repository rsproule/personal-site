import { getEmailPostHandler } from "@/app/api/email/route";
import { getTextPostHandler } from "@/app/api/text/route";

export function registerAgentRoutes() {
  getEmailPostHandler();
  getTextPostHandler();
}
