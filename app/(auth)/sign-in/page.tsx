
import { redirect } from "next/navigation";

import { getServerSession } from '@/lib/session';
// import AuthClientPage from "../auth-client";
import { SignInForm } from "./SignInForm";

export default async function SignInPage() {
  const session = await getServerSession();

  if (session) redirect("/dashboard");

  return <SignInForm />;
};
