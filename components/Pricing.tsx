import Link from 'next/link';
import { CheckIcon } from './icons/CheckIcon';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  highlighted?: boolean;
}

// Individual pricing tier component
function PricingTier({ 
  name, 
  price, 
  description, 
  features, 
  ctaText, 
  ctaLink,
  highlighted = false 
}: PricingTierProps) {
  return (
    <div className={`
      bg-white rounded-lg shadow-md border overflow-hidden 
      ${highlighted ? 'border-primary ring-2 ring-primary/20 transform scale-105 z-10' : 'border-gray-200'}
      transition-all hover:shadow-lg
    `}>
      <div className={`
        ${highlighted ? 'bg-primary text-white' : 'bg-gray-50 text-gray-800'} 
        px-6 py-4
      `}>
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500">/month</span>}
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-primary">
                <CheckIcon />
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          href={ctaLink} 
          className={`
            block w-full py-3 text-center rounded-md font-medium 
            ${highlighted 
              ? 'bg-primary text-white hover:bg-[var(--primary-hover)]' 
              : 'bg-white text-primary border border-primary hover:bg-gray-50'
            }
          `}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}

// Pricing section with multiple tiers
export default function Pricing() {
  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for small projects and personal use.',
      features: [
        'Up to 3 projects',
        'Basic analytics',
        'Community support',
        '1 GB storage'
      ],
      ctaText: 'Get Started',
      ctaLink: '/signup'
    },
    {
      name: 'Pro',
      price: '$49',
      description: 'Ideal for growing teams and businesses.',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'Priority support',
        '10 GB storage',
        'Custom domains',
        'Team collaboration'
      ],
      ctaText: 'Upgrade Now',
      ctaLink: '/signup',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with specific needs.',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Unlimited storage',
        'SLA guarantees',
        'Custom integrations',
        'SSO authentication'
      ],
      ctaText: 'Contact Us',
      ctaLink: '/contact'
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for you and start building with Next.js today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier 
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              ctaText={tier.ctaText}
              ctaLink={tier.ctaLink}
              highlighted={tier.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 