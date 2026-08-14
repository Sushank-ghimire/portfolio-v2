import { useState } from "react";
import type { FormData, FormErrors } from "@/components/contact/contact-types";
import { initialForm } from "@/components/contact/contact-types";
import { validateContactForm } from "@/components/contact/contact-validation";

export function useContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: undefined,
      }));
    }
  };

  const submit = async () => {
    const validationErrors = validateContactForm(form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return false;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Failed to send message.");
      }

      setIsSuccess(true);
      return true;
    } catch {
      setSubmitError(
        "Something went wrong while sending your message. Please try again.",
      );
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitError("");
    setIsSuccess(false);
  };

  return {
    form,
    errors,
    isSubmitting,
    submitError,
    isSuccess,
    handleChange,
    submit,
    reset,
  };
}
