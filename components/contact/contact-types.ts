export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const initialForm: FormData = {
  name: "",
  email: "",
  message: "",
};
