import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from '@/lib/session';

// import AuthClientPage from "../auth-client";
import { SignUpForm } from './SignUpForm';
import Fallback from '@/components/auth/fallback';

export default async function SignUpPage() {
  const session = await getServerSession();

  if (session) redirect('/dashboard');

  return (
    <Suspense fallback={<Fallback />}>
      <SignUpForm />
    </Suspense>
  );
}
