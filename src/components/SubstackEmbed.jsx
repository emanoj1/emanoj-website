import React, { useMemo } from "react";

/**
 * Substack's official embed is an iFrame-based signup form. :contentReference[oaicite:1]{index=1}
 * Put your publication URL in VITE_SUBSTACK_PUBLICATION_URL, e.g.:
 * https://yourpublication.substack.com
 */
export default function SubstackEmbed() {
  const pubUrl = (import.meta.env.VITE_SUBSTACK_PUBLICATION_URL || "").trim();

  const embedSrc = useMemo(() => {
    if (!pubUrl) return "";
    // Most Substack publications support /embed for the signup form.
    return `${pubUrl.replace(/\/$/, "")}/embed`;
  }, [pubUrl]);

  if (!embedSrc) {
    return (
      <div className="small">
        Add your Substack URL in <code>.env</code> as{" "}
        <code>VITE_SUBSTACK_PUBLICATION_URL</code> to show the subscribe widget.
      </div>
    );
  }

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
