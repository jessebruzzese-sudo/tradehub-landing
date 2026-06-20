import { Link } from 'react-router-dom';
import { Briefcase, Calendar, Megaphone, Users } from 'lucide-react';

function Tick({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <path
        d="M2.5 7.5L5.5 10.5L11.5 4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cards = [
  {
    icon: Briefcase,
    iconBg: '#1E6FFF',
    title: 'Pick up extra work',
    description: 'Fill your schedule with quality jobs that match your trade and availability.',
    checkColor: '#1E6FFF',
    bullets: ['Find jobs that fit your trade', 'Apply in minutes', 'Get hired faster'],
  },
  {
    icon: Users,
    iconBg: '#F97316',
    title: 'Find reliable workers',
    description: 'Connect with qualified, verified trades who are available and ready to work.',
    checkColor: '#F97316',
    bullets: ['Search by trade and location', 'See availability instantly', 'Build a crew you trust'],
  },
  {
    icon: Calendar,
    iconBg: '#22C55E',
    title: 'Fill gaps in their schedule',
    description: 'List your availability and let builders find you when they need extra hands.',
    checkColor: '#22C55E',
    bullets: ['Set your availability', 'Get found by local builders', 'Keep your pipeline full'],
  },
  {
    icon: Megaphone,
    iconBg: '#A855F7',
    title: 'Post jobs. Apply for work. Stay busy.',
    description: 'A simple way for trades to connect, communicate, and get the job done.',
    checkColor: '#A855F7',
    bullets: ['Post jobs in minutes', 'Apply to jobs that suit you', 'Manage everything in one place'],
  },
];

export function FeaturesSection() {
  return (
    <section id="how-it-works" className="bg-light-gray px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold leading-tight tracking-tight text-navy">
            Keep your crew working.
            <br />
            Find work when you need it.
          </h2>
          <p className="mt-3.5 text-base font-medium text-gray-400">
            TradeHub is where trade businesses connect to:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="flex flex-col rounded-xl bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <div
                  className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                  style={{ background: card.iconBg }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-base font-bold leading-snug text-navy">{card.title}</h3>
                <p className="mb-5 text-[13px] leading-relaxed text-gray-400">{card.description}</p>
                <div className="mt-auto flex flex-col gap-2.5">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2">
                      <Tick color={card.checkColor} />
                      <span className="text-[13px] leading-snug text-gray-600">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/signup"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(30,111,255,0.3)] transition-colors hover:bg-[#1858CC]"
          >
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
}
