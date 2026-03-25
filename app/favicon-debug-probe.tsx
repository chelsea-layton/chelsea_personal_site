"use client";

import { useEffect } from "react";

/**
 * Debug-only: reports which favicon links the browser sees and /icon.svg fetch status.
 * Remove after favicon issue is verified fixed.
 */
export function FaviconDebugProbe() {
  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll(
        'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]',
      ),
    ).map((el) => ({
      rel: el.getAttribute("rel"),
      href: el.getAttribute("href"),
      type: el.getAttribute("type"),
      sizes: el.getAttribute("sizes"),
    }));

    void fetch("/icon.svg", { method: "GET", cache: "no-store" }).then(async (r) => {
      const snippet = (await r.text()).slice(0, 120);
      // #region agent log
      fetch("http://127.0.0.1:7499/ingest/06ef5644-0c2a-41d0-bb59-e83a3d488930", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "704d70",
        },
        body: JSON.stringify({
          sessionId: "704d70",
          runId: "post-fix",
          hypothesisId: "H2",
          location: "favicon-debug-probe.tsx:fetch-icon-svg",
          message: "icon.svg response",
          data: {
            status: r.status,
            ok: r.ok,
            contentType: r.headers.get("content-type"),
            bodyPrefix: snippet,
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      // #endregion
    });

    // #region agent log
    fetch("http://127.0.0.1:7499/ingest/06ef5644-0c2a-41d0-bb59-e83a3d488930", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "704d70",
      },
      body: JSON.stringify({
        sessionId: "704d70",
        runId: "post-fix",
        hypothesisId: "H1",
        location: "favicon-debug-probe.tsx:head-links",
        message: "document head icon link order",
        data: { count: links.length, links },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, []);

  return null;
}
