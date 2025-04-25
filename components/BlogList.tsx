import Link from 'next/link';
import Image from 'next/image';

interface BlogPostProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
}

// Individual blog post card
function BlogPostCard({ 
  title, 
  excerpt, 
  slug, 
  date, 
  readTime, 
  category 
}: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 w-full bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-3xl font-bold text-primary/20">Next.js</div>
        </div>
      </div>
      <div className="p-6">
        <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-semibold mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">
          {excerpt}
        </p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
}

// Blog list section with multiple blog post cards
export default function BlogList() {
  const blogPosts = [
    {
      title: 'Getting Started with Next.js 14',
      excerpt: 'Learn how to build your first app with the latest version of Next.js.',
      slug: 'getting-started-with-nextjs-14',
      date: 'Jan 15, 2024',
      readTime: '5 min read',
      category: 'Tutorial'
    },
    {
      title: 'Optimizing Performance in Next.js Applications',
      excerpt: 'Tips and tricks to make your Next.js app lightning fast.',
      slug: 'optimizing-performance-in-nextjs',
      date: 'Feb 2, 2024',
      readTime: '8 min read',
      category: 'Performance'
    },
    {
      title: 'Building a Blog with Next.js and Markdown',
      excerpt: 'Create a modern blog using Next.js, MDX, and Tailwind CSS.',
      slug: 'building-blog-with-nextjs-markdown',
      date: 'Mar 12, 2024',
      readTime: '10 min read',
      category: 'Tutorial'
    },
    {
      title: 'The Future of React and Next.js',
      excerpt: 'Exploring upcoming features and the roadmap for Next.js.',
      slug: 'future-of-react-and-nextjs',
      date: 'Apr 5, 2024',
      readTime: '7 min read',
      category: 'News'
    },
    {
      title: 'Server Components in Next.js',
      excerpt: 'Understanding React Server Components and how they work in Next.js.',
      slug: 'server-components-in-nextjs',
      date: 'Apr 18, 2024',
      readTime: '9 min read',
      category: 'Advanced'
    },
    {
      title: 'Authentication Patterns with Next.js',
      excerpt: 'Implementing secure authentication in your Next.js applications.',
      slug: 'authentication-patterns-nextjs',
      date: 'May 1, 2024',
      readTime: '12 min read',
      category: 'Security'
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard 
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 