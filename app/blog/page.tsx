import Layout from '@/components/Layout';
import BlogList from '@/components/BlogList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Next.js UI',
  description: 'Latest articles and tutorials about Next.js',
};

export default function BlogPage() {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-6">
            Latest articles, tutorials and updates about Next.js
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium">
              All Posts
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50">
              Tutorials
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50">
              News
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50">
              Advanced
            </button>
          </div>
        </div>
      </div>
      <BlogList />
    </Layout>
  );
} 