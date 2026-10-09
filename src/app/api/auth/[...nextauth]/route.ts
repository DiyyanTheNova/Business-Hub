import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === "demo@businesshub.com" && credentials?.password === "demo123") {
          return { 
            id: "1", 
            name: "Demo User", 
            email: credentials.email,
            image: null
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/account/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) token.user = user
      return token
    },
    async session({ session, token }: any) {
      session.user = token.user
      return session
    },
  },
})

export { handler as GET, handler as POST }