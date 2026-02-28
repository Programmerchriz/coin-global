
import { redirect } from "next/navigation";
import { getServerSession } from '@/lib/session';

// import AuthClientPage from "../auth-client";
import { SignUpForm } from "./SignUpForm";

export default async function SignUpPage() {
  const session = await getServerSession();

  if (session) redirect("/dashboard");

  return <SignUpForm />;
}
