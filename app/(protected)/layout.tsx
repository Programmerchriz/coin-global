
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/utils";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) redirect("/sign-in");

  return <>{children}</>;
};
