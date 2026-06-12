import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { DEFAULT_API_URL, fetchFormConfig, submitToFormDash } from './api';
import { buildStyles } from './styles';
import type {
  ContactFormData,
  ContactFormProps,
  FormFieldConfig,
  SubmitStatus,
} from './types';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

const EMPTY_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

// Mirrors the server's dynamic Zod schema (buildDynamicSchema.ts) so visitors
// get instant feedback and the server stays the final authority.
function validate(data: ContactFormData, config: FormFieldConfig): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  else if (data.name.length > 100) errors.name = 'Name must be 100 characters or fewer';

  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!EMAIL_RE.test(data.email)) errors.email = 'Invalid email address';

  if (config.phoneVisible) {
    if (config.phoneRequired && !data.phone?.trim()) errors.phone = 'Phone is required';
    else if ((data.phone?.length ?? 0) > 20) errors.phone = 'Phone must be 20 characters or fewer';
  }

  if (config.subjectVisible) {
    if (config.subjectRequired && !data.subject?.trim()) errors.subject = 'Subject is required';
    else if ((data.subject?.length ?? 0) > 200) errors.subject = 'Subject must be 200 characters or fewer';
  }

  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.length > 5000) errors.message = 'Message must be 5000 characters or fewer';

  return errors;
}

export function ContactForm({
  publicKey,
  onSubmit,
  apiUrl = DEFAULT_API_URL,
  showPhone = true,
  requirePhone = false,
  showSubject = true,
  requireSubject = false,
  title = 'Contact Us',
  description,
  submitLabel = 'Send Message',
  successMessage = "Thanks for reaching out! We'll get back to you soon.",
  theme = 'light',
  className,
  onSuccess,
  onError,
}: ContactFormProps) {
  const managed = Boolean(publicKey);
  const styles = useMemo(() => buildStyles(theme), [theme]);

  const [config, setConfig] = useState<FormFieldConfig>({
    phoneVisible: showPhone,
    phoneRequired: requirePhone,
    subjectVisible: showSubject,
    subjectRequired: requireSubject,
  });
  const [configLoading, setConfigLoading] = useState(managed);
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [formError, setFormError] = useState('');

  // Managed mode: field visibility comes from the org's dashboard Form Config.
  useEffect(() => {
    if (!publicKey) return;
    let cancelled = false;
    setConfigLoading(true);
    fetchFormConfig(apiUrl, publicKey)
      .then((remote) => {
        if (cancelled) return;
        setConfig({
          phoneVisible: remote.phoneVisible,
          phoneRequired: remote.phoneRequired,
          subjectVisible: remote.subjectVisible,
          subjectRequired: remote.subjectRequired,
        });
      })
      .catch(() => {
        /* keep defaults — the server still validates on submit */
      })
      .finally(() => {
        if (!cancelled) setConfigLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [apiUrl, publicKey]);

  const setField = (key: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (fieldErrors[key]) setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');

    const errors = validate(form, config);
    if (Object.values(errors).some(Boolean)) {
      setFieldErrors(errors);
      return;
    }

    const data: ContactFormData = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
      ...(config.phoneVisible && form.phone?.trim() ? { phone: form.phone.trim() } : {}),
      ...(config.subjectVisible && form.subject?.trim() ? { subject: form.subject.trim() } : {}),
    };

    setStatus('submitting');
    try {
      if (publicKey) {
        await submitToFormDash(apiUrl, publicKey, data);
      } else if (onSubmit) {
        await onSubmit(data);
      } else {
        throw new Error('ContactForm needs either a publicKey or an onSubmit handler');
      }
      setStatus('success');
      setForm(EMPTY_FORM);
      onSuccess?.(data);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Something went wrong');
      setStatus('error');
      setFormError(error.message);
      onError?.(error);
    }
  };

  const renderField = (
    key: keyof ContactFormData,
    label: string,
    required: boolean,
    inputProps: Record<string, unknown> = {},
    multiline = false,
  ) => (
    <div style={styles.field}>
      <label style={styles.label} htmlFor={`formdash-${key}`}>
        {label}
        {!required && <span style={styles.optional}> (optional)</span>}
      </label>
      {multiline ? (
        <textarea
          id={`formdash-${key}`}
          style={{ ...styles.input, ...styles.textarea }}
          value={form[key] ?? ''}
          onChange={(e) => setField(key, e.target.value)}
          {...inputProps}
        />
      ) : (
        <input
          id={`formdash-${key}`}
          style={styles.input}
          value={form[key] ?? ''}
          onChange={(e) => setField(key, e.target.value)}
          {...inputProps}
        />
      )}
      {fieldErrors[key] && <p style={styles.fieldError}>{fieldErrors[key]}</p>}
    </div>
  );

  return (
    <div style={styles.root} className={className}>
      {title && <h2 style={styles.title}>{title}</h2>}
      {description && <p style={styles.description}>{description}</p>}

      {status === 'success' ? (
        <div style={styles.successBox}>
          <div style={styles.successIcon} aria-hidden>
            ✓
          </div>
          <p style={styles.successText}>{successMessage}</p>
          <button type="button" style={styles.linkButton} onClick={() => setStatus('idle')}>
            Send another message
          </button>
        </div>
      ) : configLoading ? (
        <div style={styles.skeleton}>Loading form…</div>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit} noValidate>
          {renderField('name', 'Name', true, { type: 'text', autoComplete: 'name', maxLength: 100 })}
          {renderField('email', 'Email', true, { type: 'email', autoComplete: 'email' })}
          {config.phoneVisible &&
            renderField('phone', 'Phone', config.phoneRequired, {
              type: 'tel',
              autoComplete: 'tel',
              maxLength: 20,
            })}
          {config.subjectVisible &&
            renderField('subject', 'Subject', config.subjectRequired, {
              type: 'text',
              maxLength: 200,
            })}
          {renderField('message', 'Message', true, { maxLength: 5000 }, true)}

          {formError && <p style={styles.formError}>{formError}</p>}

          <button
            type="submit"
            style={{
              ...styles.button,
              ...(status === 'submitting' ? styles.buttonDisabled : {}),
            }}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending…' : submitLabel}
          </button>
        </form>
      )}
    </div>
  );
}
