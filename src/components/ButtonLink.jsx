import React from "react";

export default function ButtonLink({ href, children, variant = "default" }) {
  const className = variant === "primary" ? "btn btn-primary" : "btn";

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
