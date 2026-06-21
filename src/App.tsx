import { Route, Routes } from 'react-router-dom';

import { DashboardPage } from './pages/DashboardPage';
import { HomePage } from './pages/HomePage';
import { PrivacyPage, TermsPage } from './pages/LegalPages';
import { JobDetailPage, PlaceholderPage } from './pages/PlaceholderPage';
import { SigninPage } from './pages/SigninPage';
import { SignupPage } from './pages/SignupPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/jobs" element={<PlaceholderPage title="Jobs" description="Browse all jobs near you." />} />
      <Route path="/jobs/create" element={<PlaceholderPage title="Post a job" description="Create a new job listing." />} />
      <Route path="/jobs/:id" element={<JobDetailPage />} />
      <Route
        path="/subcontractors"
        element={<PlaceholderPage title="Subcontractors" description="Browse vetted trades near you." />}
      />
      <Route
        path="/availability"
        element={<PlaceholderPage title="Availability" description="Manage your availability calendar." />}
      />
      <Route
        path="/profile"
        element={<PlaceholderPage title="My profile" description="Update your business details." />}
      />
    </Routes>
  );
}

