import { Link, useParams } from 'react-router-dom';

type PlaceholderPageProps = {
  title: string;
  description?: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
      <h1 className="text-2xl font-semibold text-[#0F172A]">{title}</h1>
      {description && <p className="mt-2 text-sm text-slate-500">{description}</p>}
      <Link
        to="/dashboard"
        className="mt-6 rounded-lg border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#2563EB] hover:bg-slate-50"
      >
        Back to dashboard
      </Link>
    </div>
  );
}

export function JobDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <PlaceholderPage
      title={`Job ${id}`}
      description="Job detail page — wire to real job data source."
    />
  );
}
