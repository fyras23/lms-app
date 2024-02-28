import authConfig from "@/auth.config";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT, 
} from "@/routes"; // Remove 'publicRoutes' from the import statement
import NextAuth from "next-auth";

// Define public routes
const publicRoutes = [
  "/", // Add default page ("/") to public routes
  /* Add other public routes here */
];

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthenticationRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute || isPublicRoute) return null;

  if (isAuthenticationRoute) {
    if (isLoggedIn)
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    return null;

    
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/sign-in", nextUrl));
  }

  

  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
