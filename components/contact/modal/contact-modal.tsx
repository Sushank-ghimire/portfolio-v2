"use client";

import ContactForm from "@/components/contact/contact-form";
import ContactHeader from "@/components/contact/contact-header";
import ModalBackdrop from "@/components/contact/modal/modal-backdrop";
import ModalCloseButton from "@/components/contact/modal/modal-close-button";
import SuccessComponent from "@/components/contact/success-component";
import type { ContactModalProps } from "@/components/contact/contact-types";
import { useContactForm } from "@/hooks/form/use-contact-form";
import { useModalLifecycle } from "@/hooks/modal/use-modal-lifecycle";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { shouldRender, visible } = useModalLifecycle({
    isOpen,
    onClose,
  });

  const contactForm = useContactForm();

  if (!shouldRender) {
    return null;
  }

  const handleSuccessClose = () => {
    contactForm.reset();
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <ModalBackdrop onClose={onClose} />

      <div
        className={`relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl transition-all duration-300 ease-out ${
          visible ? "translate-y-0 scale-100" : "translate-y-3 scale-[0.98]"
        }`}
      >
        <div className="h-px w-full bg-linear-to-r from-transparent via-accent to-transparent" />

        <ModalCloseButton onClose={onClose} />

        <div className="p-6 sm:p-8">
          <ContactHeader />

          {contactForm.isSuccess ? (
            <SuccessComponent onClick={handleSuccessClose} />
          ) : (
            <ContactForm
              form={contactForm.form}
              errors={contactForm.errors}
              isSubmitting={contactForm.isSubmitting}
              submitError={contactForm.submitError}
              handleChange={contactForm.handleChange}
              submit={contactForm.submit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
