import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth, { NextAuthOptions } from "next-auth";
import prismadb from "@/lib/prismadb";
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "@/lib/utils";

const prisma = new PrismaClient();

// export const authOptions: NextAuthOptions = {
//   pages: {
//     signIn: "sign-in",
//   },
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXT_AUTH_SECRET,
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "john@mail.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Email or password is empty!");
//         }

//         const user = await prismadb.user.findFirst({
//           where: {
//             email: credentials.email,
//           },
//         });

//         if (!user || !user.id || !user.password) {
//           throw new Error("Invalid user!");
//         }
//         const machtedPassword = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );

//         if (!machtedPassword) {
//           throw new Error("Invalid password");
//         }

//         return user;
//       },
//     }),
//   ],
// };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
