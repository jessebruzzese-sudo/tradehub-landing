import { Link } from 'react-router-dom';

import { TradeHubIcon } from './TradeHubIcon';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 md:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
          <TradeHubIcon className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          <div>
            <span className="block text-base font-bold leading-tight text-navy sm:text-xl">TradeHub</span>
            <p className="text-[10px] leading-tight text-gray-400 sm:text-xs">Connecting trades. simply</p>
          </div>
        </Link>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <Link
            to="/signin"
            className="inline-flex rounded-full px-2.5 py-2 text-xs font-medium text-gray-600 transition-colors hover:text-navy sm:px-4 sm:py-2.5 sm:text-sm md:px-5"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1858CC] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
