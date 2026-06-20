import { Link } from 'react-router-dom';

import { AuthForm } from '@/components/AuthForm';
import { TradeHubIcon } from '@/components/TradeHubIcon';

export function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-light-gray px-4 py-12">
      <Link to="/" className="mb-8 flex items-center gap-2.5">
        <TradeHubIcon className="h-9 w-9" />
        <span className="text-xl font-bold text-navy">TradeHub</span>
      </Link>
      <AuthForm mode="signup" />
    </div>
  );
}
