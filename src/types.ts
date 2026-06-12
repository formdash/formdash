export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface FormFieldConfig {
  phoneVisible: boolean;
  phoneRequired: boolean;
  subjectVisible: boolean;
  subjectRequired: boolean;
}

export interface ContactFormProps {
  /**
   * Managed mode: your FormDash organization public key (starts with `fd_live_`).
   * Submissions are sent to FormDash and appear in your dashboard.
   * Field visibility follows your dashboard Form Config.
   */
  publicKey?: string;
  /**
   * Standalone mode: handle the data yourself. Used when `publicKey` is not given.
   * Throw (or reject) to show an error state to the visitor.
   */
  onSubmit?: (data: ContactFormData) => void | Promise<void>;
  /** Override the FormDash API base URL (default: https://api.formdash.io/api/v1). */
  apiUrl?: string;
  /** Standalone mode only — show the phone field (default true). Managed mode follows dashboard config. */
  showPhone?: boolean;
  /** Standalone mode only — make phone required (default false). */
  requirePhone?: boolean;
  /** Standalone mode only — show the subject field (default true). */
  showSubject?: boolean;
  /** Standalone mode only — make subject required (default false). */
  requireSubject?: boolean;
  /** Heading above the form (default "Contact Us"). Pass "" to hide. */
  title?: string;
  /** Optional paragraph under the heading. */
  description?: string;
  /** Submit button label (default "Send Message"). */
  submitLabel?: string;
  /** Message shown after a successful submission. */
  successMessage?: string;
  /** Color scheme (default "light"). */
  theme?: 'light' | 'dark';
  /** Extra class name on the root element. */
  className?: string;
  /** Called after a successful submission (both modes). */
  onSuccess?: (data: ContactFormData) => void;
  /** Called when a submission fails (both modes). */
  onError?: (error: Error) => void;
}

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';
