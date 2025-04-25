import Link from 'next/link';

// Call to action section
export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build with Next.js?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of developers and start building the future of the web today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="btn bg-white text-primary hover:bg-gray-100">
              Get Started
            </Link>
            <Link href="/documentation" className="btn border border-white hover:bg-white hover:bg-opacity-10">
              Read Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 