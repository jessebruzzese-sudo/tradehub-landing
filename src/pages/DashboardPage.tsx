import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Briefcase,
  Calendar,
  ChevronRight,
  Clock,
  Eye,
  Info,
  MapPin,
  MessageSquare,
  Users,
  User,
} from 'lucide-react';

import { JobsNearYouMap } from '../components/JobsNearYouMap';

// TODO: connect to real data source
const mockUserProfile = {
  initials: 'JB',
  name: 'Jesse Bruzzese',
  business: 'Bruzzese Co',
  location: 'Melbourne, VIC',
  abnVerified: true,
  plan: 'Free plan' as const,
  isPublic: true,
  profileStrength: 80,
  nextAvailable: 'Mon 8 Jul',
  trades: [
    { name: 'Plumbing', primary: true },
    { name: 'Electrical', primary: false },
    { name: 'Tiling', primary: false },
  ],
  lat: -37.8136,
  lng: 144.9631,
};

// TODO: connect to real data source
const mockStats = {
  unreadMessages: 0,
  openJobsNearby: 1,
  profileViews: 0,
};

// TODO: connect to real data source
const mockNearbyJobs = [
  {
    id: 'job-101',
    title: 'Bathroom Renovation - Leaking Shower Resealing',
    trade: 'Plumbing',
    location: 'Fitzroy, VIC',
    lat: -37.7984,
    lng: 144.9788,
    postedAgo: '2h ago',
    status: 'New' as const,
    distanceKm: 4.7,
  },
  {
    id: 'job-102',
    title: 'Switchboard Upgrade - 3 Phase',
    trade: 'Electrical',
    location: 'Richmond, VIC',
    lat: -37.8183,
    lng: 144.991,
    postedAgo: '5h ago',
    status: 'Open' as const,
    distanceKm: 2.1,
  },
  {
    id: 'job-103',
    title: 'Emergency Burst Pipe Repair',
    trade: 'Plumbing',
    location: 'Collingwood, VIC',
    lat: -37.8025,
    lng: 144.988,
    postedAgo: '1h ago',
    status: 'Urgent' as const,
    distanceKm: 3.4,
  },
  {
    id: 'job-104',
    title: 'Kitchen Tiling - 12sqm Floor',
    trade: 'Tiling',
    location: 'South Yarra, VIC',
    lat: -37.838,
    lng: 144.992,
    postedAgo: '1d ago',
    status: 'Open' as const,
    distanceKm: 5.8,
  },
  {
    id: 'job-105',
    title: 'Hot Water System Replacement',
    trade: 'Plumbing',
    location: 'Brunswick, VIC',
    lat: -37.766,
    lng: 144.961,
    postedAgo: '3h ago',
    status: 'New' as const,
    distanceKm: 6.2,
  },
];

// TODO: connect to real data source
const mockSubcontractors = [
  {
    id: 'sub-1',
    businessName: 'Meridian Plumbing Co.',
    trade: 'Plumbing',
    location: 'Carlton, VIC',
    availability: 'Available' as const,
    distanceKm: 2.3,
  },
  {
    id: 'sub-2',
    businessName: 'Bright Spark Electrical',
    trade: 'Electrical',
    location: 'Prahran, VIC',
    availability: 'Busy' as const,
    distanceKm: 4.1,
  },
  {
    id: 'sub-3',
    businessName: 'TileCraft Melbourne',
    trade: 'Tiling',
    location: 'Footscray, VIC',
    availability: 'Available' as const,
    distanceKm: 7.5,
  },
  {
    id: 'sub-4',
    businessName: 'AquaFix Services',
    trade: 'Plumbing',
    location: 'St Kilda, VIC',
    availability: 'Available' as const,
    distanceKm: 5.0,
  },
  {
    id: 'sub-5',
    businessName: 'PowerLine Solutions',
    trade: 'Electrical',
    location: 'Hawthorn, VIC',
    availability: 'Busy' as const,
    distanceKm: 6.8,
  },
];

const statusStyles = {
  New: 'bg-green-50 text-green-700 border-green-200',
  Open: 'bg-blue-50 text-blue-700 border-blue-200',
  Urgent: 'bg-amber-50 text-amber-700 border-amber-200',
};

const actionCards = [
  {
    title: 'Post a job',
    description: 'Describe your trade job and get quotes.',
    href: '/jobs/create',
    icon: Briefcase,
    iconBg: 'bg-blue-50',
    iconColor: 'text-[#2563EB]',
  },
  {
    title: 'Browse subcontractors',
    description: 'Find vetted trades near you.',
    href: '/subcontractors',
    icon: Users,
    iconBg: 'bg-green-50',
    iconColor: 'text-[#16A34A]',
  },
  {
    title: 'List availability',
    description: "Let clients know when you're free.",
    href: '/availability',
    icon: Calendar,
    iconBg: 'bg-blue-50',
    iconColor: 'text-[#2563EB]',
  },
  {
    title: 'My profile',
    description: 'Update your business details.',
    href: '/profile',
    icon: User,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
];

function formatDateChip(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const weekday = date.toLocaleDateString('en-AU', { weekday: 'long' });
  return { dateLine: `${day}/${month}/${year}`, weekday };
}

function StatItem({
  icon: Icon,
  value,
  color,
  tooltip,
}: {
  icon: typeof MessageSquare;
  value: number;
  color: string;
  tooltip: string;
}) {
  return (
    <div className="group relative flex items-center gap-2">
      <Icon className="h-5 w-5 shrink-0" style={{ color }} aria-hidden="true" />
      <span className="text-lg font-semibold text-[#0F172A]">{value}</span>
      <span className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0F172A] px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 md:group-hover:opacity-100">
        {tooltip}
      </span>
    </div>
  );
}

export function DashboardPage() {
  const [isPublic, setIsPublic] = useState(mockUserProfile.isPublic);
  const { dateLine, weekday } = formatDateChip(new Date('2026-06-08'));

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <img
        src="/tradehub-mark.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-200px] right-[-200px] z-0 h-[1600px] w-[1600px] opacity-[0.08]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-[#0F172A]">Dashboard</h1>
            <p className="mt-0.5 text-sm text-slate-500">Welcome back, Jesse.</p>
          </div>
          <div className="shrink-0 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-center">
            <div className="text-sm font-medium text-[#0F172A]">{dateLine}</div>
            <div className="text-xs text-slate-500">{weekday}</div>
          </div>
        </div>

        {/* Row 1 — Profile + Map */}
        <div className="mb-4 flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-col gap-4 lg:w-5/12 lg:flex-row">
            {/* Stats */}
            <div className="flex flex-row items-center justify-around gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-4 lg:h-fit lg:w-[115px] lg:flex-col lg:items-start lg:justify-start lg:gap-2 lg:self-start">
              <StatItem
                icon={MessageSquare}
                value={mockStats.unreadMessages}
                color="#F97316"
                tooltip="Messages"
              />
              <StatItem
                icon={Briefcase}
                value={mockStats.openJobsNearby}
                color="#16A34A"
                tooltip="Jobs Available"
              />
              <StatItem
                icon={Eye}
                value={mockStats.profileViews}
                color="#2563EB"
                tooltip="Views"
              />
            </div>

            {/* Profile card */}
            <div className="flex-1 rounded-2xl border border-[#E2E8F0] bg-white p-5 lg:min-h-[300px]">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-sm font-semibold text-white">
                  {mockUserProfile.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-semibold text-[#0F172A]">{mockUserProfile.name}</h2>
                  <p className="text-[13px] text-slate-500">
                    {mockUserProfile.business} · {mockUserProfile.location}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {mockUserProfile.abnVerified && (
                  <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    ABN verified
                  </span>
                )}
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#2563EB]">
                  {mockUserProfile.plan}
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5 text-slate-400" />
                  <span className="text-xs text-slate-600">Profile</span>
                  <Info className="h-3.5 w-3.5 text-slate-400" />
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isPublic}
                    onClick={() => setIsPublic((prev) => !prev)}
                    className={`relative h-5 w-9 rounded-full transition-colors ${
                      isPublic ? 'bg-[#2563EB]' : 'bg-red-500'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                        isPublic ? 'left-[18px]' : 'left-0.5'
                      }`}
                    />
                  </button>
                  <span
                    className={`text-xs font-medium ${isPublic ? 'text-[#2563EB]' : 'text-red-500'}`}
                  >
                    {isPublic ? 'Public' : 'Private'}
                  </span>
                </div>
              </div>

              {/* Desktop-only profile details */}
              <div className="mt-5 hidden space-y-4 lg:block">
                <div>
                  <div className="mb-1.5 flex items-center justify-between text-xs text-slate-500">
                    <span>Profile strength</span>
                    <span className="font-medium text-[#0F172A]">
                      {mockUserProfile.profileStrength}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-[#2563EB]"
                      style={{ width: `${mockUserProfile.profileStrength}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  <span>
                    Next available:{' '}
                    {mockUserProfile.nextAvailable ?? (
                      <span className="text-slate-400">Not listed</span>
                    )}
                  </span>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-600">Trades</span>
                    <button type="button" className="text-sm font-medium text-[#2563EB] hover:underline">
                      + Select trades
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mockUserProfile.trades.map((trade) => (
                      <span
                        key={trade.name}
                        className={`rounded-lg px-2.5 py-1 text-xs font-medium ${
                          trade.primary
                            ? 'bg-blue-50 text-[#2563EB]'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {trade.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Jobs map — full width below profile on md, side column on lg */}
          <div className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 lg:w-7/12 lg:min-h-[300px]">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-semibold text-[#0F172A]">Jobs near you</h2>
              <Link
                to="/jobs"
                className="flex items-center gap-0.5 text-sm font-medium text-[#2563EB] hover:underline"
              >
                View all jobs
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex-1">
              <JobsNearYouMap
                userLocation={{ lat: mockUserProfile.lat, lng: mockUserProfile.lng }}
                jobs={mockNearbyJobs.map(({ id, lat, lng, title, trade }) => ({
                  id,
                  lat,
                  lng,
                  title,
                  trade,
                }))}
              />
            </div>
          </div>
        </div>

        {/* Row 2 — Action cards */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {actionCards.map((card) => (
            <Link
              key={card.href}
              to={card.href}
              className="group relative flex min-h-[110px] flex-col rounded-2xl border border-[#E2E8F0] bg-white p-4 transition-shadow hover:shadow-sm"
            >
              <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-slate-300 transition-colors group-hover:text-slate-400" />
              <div
                className={`mb-3 flex h-11 w-11 items-center justify-center rounded-[10px] ${card.iconBg}`}
              >
                <card.icon className={`h-5 w-5 ${card.iconColor}`} />
              </div>
              <h3 className="text-sm font-semibold text-[#0F172A]">{card.title}</h3>
              <p className="mt-0.5 text-xs text-slate-500">{card.description}</p>
            </Link>
          ))}
        </div>

        {/* Row 3 — Lists */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Recent listings */}
          <div className="flex max-h-[500px] flex-col rounded-2xl border border-[#E2E8F0] bg-white">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] px-5 py-4">
              <h2 className="text-base font-semibold text-[#0F172A]">Recent listings near you</h2>
              <Link to="/jobs" className="text-sm font-medium text-[#2563EB] hover:underline">
                View all
              </Link>
            </div>
            <div className="overflow-y-auto px-5 py-2">
              {mockNearbyJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex items-start gap-3 border-b border-slate-100 py-4 last:border-b-0"
                >
                  <div className="min-w-0 flex-1">
                    <Link
                      to={`/jobs/${job.id}`}
                      className="text-sm font-medium text-[#0F172A] hover:text-[#2563EB] hover:underline"
                    >
                      {job.title}
                    </Link>
                    <p className="mt-0.5 text-xs font-medium text-[#2563EB]">{job.trade}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.postedAgo}
                      </span>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs font-medium ${statusStyles[job.status]}`}
                    >
                      {job.status}
                    </span>
                    <span className="text-xs text-slate-400">{job.distanceKm}km</span>
                    <Link
                      to={`/jobs/${job.id}`}
                      className="rounded-lg border border-[#E2E8F0] px-3 py-1 text-xs font-medium text-[#2563EB] hover:bg-slate-50"
                    >
                      Apply now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subcontractors */}
          <div className="flex max-h-[500px] flex-col rounded-2xl border border-[#E2E8F0] bg-white">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] px-5 py-4">
              <h2 className="text-base font-semibold text-[#0F172A]">Listed Subcontractors</h2>
              <Link
                to="/subcontractors"
                className="text-sm font-medium text-[#2563EB] hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="overflow-y-auto px-5 py-2">
              {mockSubcontractors.map((sub) => (
                <div
                  key={sub.id}
                  className="flex items-start gap-3 border-b border-slate-100 py-4 last:border-b-0"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-[#0F172A]">{sub.businessName}</p>
                    <p className="mt-0.5 text-xs font-medium text-[#2563EB]">{sub.trade}</p>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="h-3 w-3" />
                      {sub.location}
                    </span>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs font-medium ${
                        sub.availability === 'Available'
                          ? 'border-green-200 bg-green-50 text-green-700'
                          : 'border-slate-200 bg-slate-100 text-slate-600'
                      }`}
                    >
                      {sub.availability}
                    </span>
                    <span className="text-xs text-slate-400">{sub.distanceKm}km</span>
                    <Link
                      to="/subcontractors"
                      className="rounded-lg border border-[#E2E8F0] px-3 py-1 text-xs font-medium text-[#2563EB] hover:bg-slate-50"
                    >
                      View profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
