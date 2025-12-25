import React, { useMemo } from "react";

/**
 * Substack embed: iFrame-based signup form
 */
export default function SubstackEmbed() {
  // Hardcode to avoid env issues in Netlify, local, etc.
  const pubUrl = "https://emanoj.substack.com";

  const embedSrc = useMemo(() => {
    if (!pubUrl) return "";
    return `${pubUrl.replace(/\/$/, "")}/embed`;
  }, [pubUrl]);

  return (
    <div className="embedWrap" aria-label="Substack subscribe embed">
      <iframe
        className="embedFrame"
        src={embedSrc}
        title="Subscribe on Substack"
        scrolling="no"
      />
    </div>
  );
}

