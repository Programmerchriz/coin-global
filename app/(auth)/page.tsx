
import { auth } from "@/lib/auth";
import AuthClientPage from "./auth-client";

export default async function AuthPage() {
  return (<AuthClientPage defaultMode="sign-in" />);
};
