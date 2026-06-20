import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { PrivacyPage, TermsPage } from './pages/LegalPages';
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
    </Routes>
  );
}
