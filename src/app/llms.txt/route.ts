import { buildLlmsTxt, llmsHeaders } from "@/lib/llms";

export function GET() {
  return new Response(buildLlmsTxt(), { headers: llmsHeaders });
}
