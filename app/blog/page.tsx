import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <main className='max-w-6xl mx-auto px-6 py-16'>
      <Link
        href='/'
        className='inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
        </svg>
        Back to Home
      </Link>
      <h1 className='text-4xl font-bold mb-8'>Insights & Blog</h1>
      <p className='text-slate-600 mb-12 max-w-2xl'>
        Exploring AI innovation, technology trends, and the future of artificial intelligence in Africa.
      </p>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className='group border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow'
          >
            <time className='text-sm text-slate-500'>{post.date}</time>
            <h2 className='text-xl font-bold mt-2 group-hover:text-blue-600 transition-colors'>
              {post.title}
            </h2>
            <p className='text-slate-600 mt-3 line-clamp-3'>{post.excerpt}</p>
            <span className='inline-block mt-4 text-blue-600 font-medium group-hover:underline'>
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
