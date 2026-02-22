
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import AuthClientPage from "../auth-client";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) redirect("/dashboard");

  return <AuthClientPage defaultMode="signup" />;
}
