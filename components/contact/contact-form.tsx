"use client";

import type { FormEvent } from "react";
import ContactField from "@/components/contact/contact-field";
import type { FormData, FormErrors } from "@/components/contact/contact-types";
import { FormStatus } from "@/components/contact/form-status";

interface ContactFormProps {
  form: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  submitError: string;
  handleChange: (field: keyof FormData, value: string) => void;
  submit: () => Promise<boolean>;
}

export default function ContactForm({
  form,
  errors,
  isSubmitting,
  submitError,
  handleChange,
  submit,
}: ContactFormProps) {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await submit();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <ContactField id="contact-name" label="Name" error={errors.name}>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(event) => handleChange("name", event.target.value)}
          placeholder="Your name"
          maxLength={80}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-dark ${
            errors.name
              ? "border-red-400/70 focus:border-red-400"
              : "border-border focus:border-accent"
          }`}
        />
      </ContactField>

      <ContactField id="contact-email" label="Email" error={errors.email}>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) => handleChange("email", event.target.value)}
          placeholder="you@example.com"
          maxLength={254}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-dark ${
            errors.email
              ? "border-red-400/70 focus:border-red-400"
              : "border-border focus:border-accent"
          }`}
        />
      </ContactField>

      <ContactField
        id="contact-message"
        label="Message"
        error={errors.message}
        footer={
          <span id="contact-message-count" className="text-xs text-muted-dark">
            {form.message.length}/2000
          </span>
        }
      >
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          placeholder="Tell me a little about your project..."
          maxLength={2000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : "contact-message-count"
          }
          className={`w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm leading-6 text-foreground outline-none transition-all placeholder:text-muted-dark ${
            errors.message
              ? "border-red-400/70 focus:border-red-400"
              : "border-border focus:border-accent"
          }`}
        />
      </ContactField>

      {submitError && <FormStatus type="error" message={submitError} />}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full cursor-pointer overflow-hidden rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-accent-strong hover:shadow-[0_0_30px_rgba(45,212,191,0.18)] focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="relative z-10">
          {isSubmitting ? "Sending..." : "Send message"}
        </span>
      </button>
    </form>
  );
}
