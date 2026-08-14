import { useEffect, useState } from "react";

interface UseModalLifecycleOptions {
  isOpen: boolean;
  onClose: () => void;
  animationDuration?: number;
}

export function useModalLifecycle({
  isOpen,
  onClose,
  animationDuration = 300,
}: UseModalLifecycleOptions) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);

      const animationFrame = requestAnimationFrame(() => {
        setVisible(true);
      });

      document.body.style.overflow = "hidden";

      return () => {
        cancelAnimationFrame(animationFrame);
        document.body.style.overflow = "";
      };
    }

    setVisible(false);

    const timeout = setTimeout(() => {
      setShouldRender(false);
    }, animationDuration);

    document.body.style.overflow = "";

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, [isOpen, animationDuration]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return {
    shouldRender,
    visible,
  };
}
