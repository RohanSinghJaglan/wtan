import Image from 'next/image';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  imageSrc: string;
}

// Individual testimonial card
function TestimonialCard({ content, author, role, imageSrc }: TestimonialProps) {
  // Extract initials for the placeholder
  const initials = author
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <svg className="w-8 h-8 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6">{content}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 relative rounded-full overflow-hidden mr-4 bg-primary flex items-center justify-center text-white font-medium">
          {initials}
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}

// Testimonials section with multiple testimonial cards
export default function Testimonials() {
  const testimonials = [
    {
      content: "Next.js has transformed our development workflow. The performance gains and developer experience are unmatched.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      imageSrc: "/testimonial1.jpg"
    },
    {
      content: "We migrated our entire platform to Next.js and saw immediate improvements in load times and SEO rankings.",
      author: "Michael Chen",
      role: "Lead Developer, StartupX",
      imageSrc: "/testimonial2.jpg"
    },
    {
      content: "The hybrid rendering capabilities of Next.js gave us the flexibility we needed for our complex application.",
      author: "Emily Rodriguez",
      role: "Product Manager, Enterprise Solutions",
      imageSrc: "/testimonial3.jpg"
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of developers and companies who have already made the switch to Next.js.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 