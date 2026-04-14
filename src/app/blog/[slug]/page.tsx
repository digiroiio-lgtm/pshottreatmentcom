import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://pshottreatment.com/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://pshottreatment.com/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          <span>/</span>
          <span className="text-gray-700 truncate max-w-xs" title={post.title}>{post.title}</span>
        </nav>

        {/* Category + meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
          <span className="text-gray-400 text-xs">{post.readingTime} read</span>
          <span className="text-gray-400 text-xs">·</span>
          <span className="text-gray-400 text-xs">{new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{post.title}</h1>

        <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-blue-400 pl-4">{post.excerpt}</p>

        {/* Article content */}
        <article className="prose prose-lg max-w-none">
          {post.sections.map((section) => (
            <section key={section.heading} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </article>

        {/* Internal links */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 my-10">
          <h3 className="font-bold text-gray-900 mb-4">Explore Further</h3>
          <div className="flex flex-wrap gap-3">
            {(post.exploreLinks ?? [
              { href: "/p-shot-price", label: "P-Shot Price" },
              { href: "/p-shot-before-after", label: "Before & After" },
              { href: "/p-shot-reviews", label: "Patient Reviews" },
              { href: "/how-it-works", label: "How It Works" },
              { href: "/locations/turkey", label: "Book in Turkey" },
              { href: "/locations", label: "All Locations" },
            ]).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-700 text-white rounded-2xl p-8 text-center my-10">
          <h3 className="text-2xl font-bold mb-2">Ready to Book Your P-Shot?</h3>
          <p className="text-blue-100 mb-6">£300 all-inclusive in Turkey. Same-day procedure. WhatsApp us for a free consultation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/905353998999?text=Hi%2C%20I%27m%20interested%20in%20the%20P-Shot%20treatment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Now
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Related posts */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">{related.category}</span>
                <h4 className="font-semibold text-gray-900 mt-1 text-sm leading-snug">{related.title}</h4>
                <span className="text-xs text-gray-400 mt-2 block">{related.readingTime} read</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
