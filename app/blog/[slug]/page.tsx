import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | BuildAfricaAI`,
    description: post.excerpt,
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to Blog
      </Link>
      
      <article>
        <header className="mb-8">
          <time className="text-sm text-slate-500">{post.date}</time>
          <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
          <p className="text-xl text-slate-600">{post.excerpt}</p>
        </header>
        
        <div 
          className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
      </article>
    </main>
  );
}
