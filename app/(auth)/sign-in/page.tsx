import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import { getServerSession } from '@/lib/session';
// import AuthClientPage from "../auth-client";
import { SignInForm } from './SignInForm';
import Fallback from '@/app/(auth)/fallback';

export default async function SignInPage() {
  const session = await getServerSession();

  if (session) redirect('/dashboard');

  return (
    <Suspense fallback={<Fallback />}>
      <SignInForm />
    </Suspense>
  );
}
