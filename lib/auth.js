import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Debug: Check if environment variables are loading
console.log('Environment check:');
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? '✅ Loaded' : '❌ Missing');
console.log('NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET ? '✅ Loaded' : '❌ Missing');

// Use a fallback secret if environment variable is missing
const secret = process.env.NEXTAUTH_SECRET || "fallback_dev_secret_12345";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: secret, // Explicitly provide the secret
  callbacks: {
    async session({ session, token }) {
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  debug: true, // Enable debug mode
};

// Export the auth options
export { authOptions };

// Export the NextAuth function
export default NextAuth(authOptions);