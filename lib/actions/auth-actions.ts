
"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../auth";
// import { authClient } from "../auth-client";

export const signUp = async (
  email: string,
  password: string,
  name: string,
) => {
  const response = await auth.api.signUpEmail({
    body: {
      email, password, name, callbackURL: "/dashboard",
      // email, password, name, callbackURL: "/verify-email",
    },
  });

  // if (!response.user.emailVerified) {
  //   await auth.api.sendVerificationEmail({
  //     body: {
  //       email,
  //       callbackURL: "/email-verified",
  //     },
  //   });
  // }

  return (response);
};

export const signIn = async (
  email: string,
  password: string,
) => {
  const response = await auth.api.signInEmail({
    body: {
      email, password, callbackURL: "/dashboard",
    },
  });

  return (response);
};

export const signOut = async () => {
  const response = await auth.api.signOut({
    headers: await headers(),
  });

  return (response);
};

export const signInSocial = async (provider: "google") => {
  const { url } = await auth.api.signInSocial({
    body: {
      provider,
      callbackURL: "/dashboard",
    },
  });

  if (url) {
    redirect(url);
  }
};

export const signOutSocial = async () => {
  const response = await auth.api.signOut({
    headers: await headers(),
  });

  return (response);
};
