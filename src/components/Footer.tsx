import { Link } from 'react-router-dom';

import { TradeHubIcon } from './TradeHubIcon';

export function Footer() {
  return (
    <footer className="bg-navy px-5 py-6 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <TradeHubIcon className="h-7 w-7" variant="white" />
          <span className="text-lg font-bold text-white">TradeHub</span>
        </div>

        <p className="text-sm text-gray-400">© 2025 TradeHub. All rights reserved.</p>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link to="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/terms" className="transition-colors hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
