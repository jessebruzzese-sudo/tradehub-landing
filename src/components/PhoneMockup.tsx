import { Briefcase, Calendar, Clock, MapPin, Menu } from 'lucide-react';

import { TradeHubIcon } from './TradeHubIcon';

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[295px]">
      {/* Floating card — left */}
      <div className="absolute -left-4 top-20 z-10 hidden rounded-xl border border-gray-100 bg-white p-3.5 shadow-[var(--shadow-card)] lg:-left-20 lg:block">
        <p className="text-lg font-bold leading-tight text-navy">1,200+</p>
        <p className="mt-1 text-[11px] leading-snug text-gray-500">
          trade businesses
          <br />
          on TradeHub
        </p>
      </div>

      {/* Floating card — right */}
      <div className="absolute -right-4 top-32 z-10 hidden rounded-xl border border-gray-100 bg-white p-3.5 shadow-[var(--shadow-card)] lg:-right-24 lg:block">
        <div className="mb-2 flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-trust-green animate-pulse-dot" />
          <span className="text-xs font-bold text-trust-green">Live now</span>
        </div>
        <p className="text-sm font-bold leading-snug text-navy">
          23 jobs posted in
          <br />
          your area this week
        </p>
      </div>

      {/* Phone frame */}
      <div className="relative rounded-[46px] bg-[#111] p-3 shadow-[0_32px_80px_rgba(0,0,0,0.25)]">
        <div className="overflow-hidden rounded-[36px] bg-[#F3F4F6]">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-5 z-10 h-[22px] w-20 -translate-x-1/2 rounded-full bg-[#111]" />

          {/* App header */}
          <div className="flex items-center gap-2 border-b border-gray-200 bg-white px-4 pb-2.5 pt-10">
            <Menu className="h-4 w-4 text-gray-600" />
            <div className="flex flex-1 items-center gap-1.5">
              <TradeHubIcon className="h-4 w-4" />
              <span className="text-sm font-bold text-navy">TradeHub</span>
            </div>
          </div>

          {/* Jobs section header */}
          <div className="border-b border-gray-100 bg-white px-4 py-3">
            <div className="mb-1 flex items-center gap-1.5">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-50">
                <Briefcase className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm font-extrabold text-navy">Jobs</span>
            </div>
            <p className="text-[10px] leading-snug text-gray-500">
              Find subcontracting work or post jobs
              <br />
              to hire subcontractors
            </p>
          </div>

          {/* Free posts banner */}
          <div className="bg-white px-4 pb-2.5">
            <div className="mt-2 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-2">
              <p className="text-center text-[9px] leading-snug text-gray-600">
                0 of 1 free job posts used in the
                <br />
                last 30 days.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1.5 bg-white px-4 pb-2.5">
            <button type="button" className="flex-1 rounded-md bg-primary py-1.5 text-[10px] font-bold text-white">
              Find Work
            </button>
            <button
              type="button"
              className="flex-1 rounded-md border border-gray-300 bg-white py-1.5 text-[10px] font-semibold text-gray-500"
            >
              My Job Posts
            </button>
          </div>

          {/* Filters */}
          <div className="border-t border-gray-100 bg-white px-4 py-2">
            <div className="mb-1.5 flex items-center gap-1.5">
              <span className="text-[9px] text-gray-500">Showing jobs in your trade:</span>
              <span className="rounded-full bg-primary px-2 py-0.5 text-[8px] font-bold text-white">Plumbing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-gray-500">Radius</span>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[8px] font-bold text-primary">
                20km radius
              </span>
            </div>
          </div>

          {/* Sort */}
          <div className="border-t border-gray-100 bg-white px-4 py-2">
            <span className="text-[9px] text-gray-500">Sort: </span>
            <span className="text-[9px] font-bold text-primary">Newest </span>
            <span className="text-[9px] text-gray-500">Nearest</span>
          </div>

          {/* Job card */}
          <div className="mx-2.5 mb-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-100 px-3 py-2.5">
              <div className="mb-1 flex items-start justify-between gap-2">
                <p className="max-w-[75%] text-[11px] font-extrabold leading-snug text-navy">
                  Help with new drains for house
                </p>
                <span className="whitespace-nowrap rounded-full bg-blue-50 px-1.5 py-0.5 text-[8px] font-bold text-primary">
                  Plumbing
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex h-[18px] w-[18px] items-center justify-center rounded bg-gray-100 text-[7px] font-extrabold text-gray-600">
                  PO
                </div>
                <span className="text-[9px] font-semibold text-gray-600">Poster</span>
                <span className="rounded-full bg-green-100 px-1.5 py-0.5 text-[7px] font-bold text-green-600">New</span>
              </div>
            </div>
            <div className="px-3 py-2">
              <p className="mb-2 text-[9px] leading-snug text-gray-500">
                Plumber needed for new drain installation - South Moran...
              </p>
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1 text-[8px] text-gray-500">
                  <MapPin className="h-2 w-2 text-gray-400" />
                  South Morang VIC
                </span>
                <span className="flex items-center gap-1 text-[8px] text-gray-500">
                  <Calendar className="h-2 w-2 text-gray-400" />
                  21 May
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-[8px] font-bold text-green-600">
                  ● 0.0 km away
                </span>
                <span className="flex items-center gap-1 text-[8px] text-gray-500">
                  <Clock className="h-2 w-2 text-gray-400" />
                  07:00
                </span>
              </div>
            </div>
            <div className="border-t border-gray-100 bg-gray-50 px-3 py-1.5">
              <span className="text-[8px] text-gray-400">$ Price not specified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
