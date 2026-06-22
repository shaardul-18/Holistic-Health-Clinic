import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith('/admin/login')) {
          return true
        }
        return !!token
      }
    },
    pages: {
      signIn: "/admin/login",
    }
  }
)

export const config = {
  matcher: ["/admin/:path*"]
}
