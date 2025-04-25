import Layout from '@/components/Layout';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - Next.js UI',
  description: 'Explore the powerful features of Next.js',
};

export default function FeaturesPage() {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Discover all the powerful features that make Next.js the leading React framework.
          </p>
        </div>
      </div>
      <Features />
      <CTA />
    </Layout>
  );
} 