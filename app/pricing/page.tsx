import Layout from '@/components/Layout';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Next.js UI',
  description: 'Simple, transparent pricing plans for Next.js',
};

export default function PricingPage() {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Flexible plans to meet your needs. Start for free, no credit card required.
          </p>
        </div>
      </div>
      <Pricing />
      <CTA />
    </Layout>
  );
} 