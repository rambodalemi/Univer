import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes that do not require authentication
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return; // Allow public routes
  }

  // Protect all other routes
  const { sessionClaims } = await auth.protect();

  // Access role from session claims
  const userRole = sessionClaims?.["role"];
  const isAdminRoute = req.nextUrl.pathname.startsWith("/panel");

  // Debugging: Log the claims to ensure the data is being fetched correctly
  console.log("JWT Claims:", sessionClaims);

  // Restrict `/panel` to users with `admin` role
  if (isAdminRoute && userRole !== "admin") {
    return new Response("Forbidden: Admin access only.", { status: 403 });
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
