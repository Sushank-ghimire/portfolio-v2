import type { FormData, FormErrors } from "@/components/contact/contact-types";

export function validateContactForm(form: FormData): FormErrors {
  const errors: FormErrors = {};

  const name = form.name.trim();
  const email = form.email.trim();
  const message = form.message.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > 80) {
    errors.name = "Name must be less than 80 characters.";
  }

  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message) {
    errors.message = "Please enter a message.";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (message.length > 2000) {
    errors.message = "Message must be less than 2000 characters.";
  }

  return errors;
}
