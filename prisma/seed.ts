
import { PrismaClient, Prisma } from "../lib/generated/prisma/client";
import { Currency } from "../lib/generated/prisma/client";
import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
  // Create Admin Wallets
  await prisma.adminWallet.createMany({
    data: [
      { currency: Currency.USD },
      { currency: Currency.BTC },
      { currency: Currency.ETH },
      { currency: Currency.USDT },
    ],
    skipDuplicates: true,
  });

  // Create User
  const user = await prisma.user.create({
    data: {
      email: "alice@example.com",
      password: "hashed_password_here",
    },
  });

  // Create Wallets for User
  await prisma.wallet.createMany({
    data: [
      {
        userId: user.id,
        currency: Currency.USD,
        balance: 1000,
        lockedBalance: 0,
      },
      {
        userId: user.id,
        currency: Currency.BTC,
        balance: 0.5,
        lockedBalance: 0,
      },
    ],
  });

  console.log("Seed completed ✅");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
