import ArticlePage from "@/components/ArticlePage";
import { articles } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";

const path = "/flying-to-turkey-ed-treatment";

export const metadata = buildMetadata(path);

export default function Page() {
  return <ArticlePage article={articles[path]} />;
}
