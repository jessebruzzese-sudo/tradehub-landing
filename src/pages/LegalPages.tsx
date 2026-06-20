import { Link } from 'react-router-dom';

import { TradeHubIcon } from '@/components/TradeHubIcon';

function LegalStub({ title }: { title: string }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-light-gray px-4 py-12">
      <Link to="/" className="mb-8 flex items-center gap-2.5">
        <TradeHubIcon className="h-9 w-9" />
        <span className="text-xl font-bold text-navy">TradeHub</span>
      </Link>
      <div className="w-full max-w-lg rounded-xl bg-white p-8 text-center shadow-[var(--shadow-card)]">
        <h1 className="text-2xl font-bold text-navy">{title}</h1>
        <p className="mt-3 text-sm text-gray-500">This page is a placeholder for the standalone landing site.</p>
        <Link to="/" className="mt-6 inline-block text-sm font-medium text-primary hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return <LegalStub title="Privacy Policy" />;
}

export function TermsPage() {
  return <LegalStub title="Terms of Service" />;
}
