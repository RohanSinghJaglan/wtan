import Image from 'next/image';
import Link from 'next/link';

// Hero section with headline, CTA and image
export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build amazing websites with Next.js
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The React framework for production-ready applications. 
              Start building your next big idea with Next.js.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started" className="btn btn-primary text-center">
                Get Started
              </Link>
              <Link href="/learn-more" className="btn border border-gray-300 text-gray-700 hover:bg-gray-50 text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-5xl font-bold text-primary/20">Next.js</div>
            </div>
            {/* Fallback content shown until image is created */}
          </div>
        </div>
      </div>
    </section>
  );
} 