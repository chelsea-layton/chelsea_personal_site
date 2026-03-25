import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // #region agent log
  fetch("http://127.0.0.1:7499/ingest/06ef5644-0c2a-41d0-bb59-e83a3d488930", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "90bc9f",
    },
    body: JSON.stringify({
      sessionId: "90bc9f",
      runId: "local-prod-verify",
      hypothesisId: "H4",
      location: "middleware.ts:middleware",
      message: "request hit middleware before route handling",
      data: {
        pathname: request.nextUrl.pathname,
        host: request.headers.get("host"),
      },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
};
