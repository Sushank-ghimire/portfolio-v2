"use client";

import type { ReactNode } from "react";

interface ContactFieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function ContactField({
  id,
  label,
  error,
  children,
  footer,
}: ContactFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>

      {children}

      {(error || footer) && (
        <div className="mt-1.5 flex items-center justify-between gap-3">
          <div className="min-w-0">
            {error ? (
              <p id={errorId} className="text-xs text-red-400">
                {error}
              </p>
            ) : (
              <span />
            )}
          </div>

          {footer}
        </div>
      )}
    </div>
  );
}
