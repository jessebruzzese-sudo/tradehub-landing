import { Link } from 'react-router-dom';
import { MapPin, PlayCircle, Wrench } from 'lucide-react';

import { PhoneMockup } from './PhoneMockup';

function BlueCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#1E6FFF" />
      <path
        d="M5.5 9.5L7.5 11.5L12.5 6.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const valueProps = [
  'Got gaps in your schedule? Find work',
  'Need extra hands? Post a job',
  'Got spare workers? Put them to work',
];

const trustBadges = ['Free to join', 'No lead fees — ever', 'ABN verified businesses', 'Australia-wide'];

export function HeroSection() {
  const scrollToFeatures = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-light-gray px-5 py-16 md:px-10 md:py-24 lg:px-12">
      {/* Decorative blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-gray-300/30 md:-right-16 md:h-[600px] md:w-[600px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* Left column — text (always first on mobile) */}
        <div className="order-1 flex flex-col items-center text-center lg:items-center lg:px-6">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-gray-200/70 px-3.5 py-1.5 text-xs font-medium text-gray-600">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Built for Australian trade businesses
          </div>

          <h1 className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] tracking-tight text-navy">
            <span className="block">Find work.</span>
            <span className="block text-primary">Find workers.</span>
            <span className="block">Fill your schedule.</span>
          </h1>

          <div className="mt-8 flex w-full max-w-md flex-col items-center gap-3">
            {valueProps.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <BlueCheck />
                <span className="text-sm font-medium text-gray-600 md:text-base">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[22px] font-bold text-navy">No lead fees. Just real jobs.</p>

          <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(30,111,255,0.35)] transition-colors hover:bg-[#1858CC]"
            >
              <Wrench className="h-4 w-4" />
              Join free today
            </Link>
            <button
              type="button"
              onClick={scrollToFeatures}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-[15px] font-bold text-gray-600 transition-colors hover:border-gray-400"
            >
              <PlayCircle className="h-4 w-4 text-gray-500" />
              See how it works
            </button>
          </div>

          <div className="mt-8 flex max-w-lg flex-wrap items-center justify-center gap-x-5 gap-y-3 md:gap-x-6">
            {trustBadges.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <BlueCheck />
                <span className="text-sm font-medium text-gray-500">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — phone mockup (below text on mobile) */}
        <div className="order-2 flex justify-center lg:justify-center lg:px-6">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
