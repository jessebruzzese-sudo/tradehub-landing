import { Link } from 'react-router-dom';

type AuthFormProps = {
  mode: 'signup' | 'signin';
};

export function AuthForm({ mode }: AuthFormProps) {
  const isSignup = mode === 'signup';

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-[var(--shadow-card)]">
      <h1 className="text-2xl font-bold text-navy">{isSignup ? 'Create your account' : 'Sign in'}</h1>
      <p className="mt-2 text-sm text-gray-500">
        {isSignup ? 'Join TradeHub — free to get started.' : 'Welcome back to TradeHub.'}
      </p>

      <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1858CC]"
        >
          {isSignup ? 'Create Account' : 'Sign In'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        {isSignup ? (
          <>
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </>
        ) : (
          <>
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="font-medium text-primary hover:underline">
              Get started
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
