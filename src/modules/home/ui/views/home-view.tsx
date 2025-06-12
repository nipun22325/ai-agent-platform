"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { redirect } from "next/navigation";

export const HomeView = () => {
  const { data: session } = authClient.useSession();

  if (!session) {
    return <p> Loading... </p>;
  }
  return (
    <div className="p-4 flex flex-col gap-y-4">
      <p className="mt-2">You are logged in as {session.user.name} </p>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: { onSuccess: () => redirect("/sign-in") }, // Redirect to sign-in page after sign out
          })
        }
        className="w-full"
      >
        Sign Out
      </Button>
    </div>
  );
};
