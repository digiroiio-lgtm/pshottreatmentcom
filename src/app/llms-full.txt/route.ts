import { buildLlmsFullTxt, llmsHeaders } from "@/lib/llms";

export function GET() {
  return new Response(buildLlmsFullTxt(), { headers: llmsHeaders });
}
