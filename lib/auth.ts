
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import sendEmail from './email';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),

  rateLimit: {
    window: 60,
    max: 20,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  emailAndPassword: {
    enabled: true,
    // requireEmailVerification: true,
  },

  emailVerification: {
    sendOnSignIn: true,
    autoSignInAfterVerification: true,

    async sendVerificationEmail({
      user,
      url,
    }) {
      await sendEmail({
        to: user.email,
        subject: "Verify your email",
        text: `Click the link to verify your email ${url}`,
      });
    },
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        input: false,
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
