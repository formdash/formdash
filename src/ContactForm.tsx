import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DEFAULT_API_URL, fetchFormConfig, submitToFormDash } from './api';
import { buildContactSchema } from './schema';
import { buildStyles } from './styles';
import type {
  ContactFormData,
  ContactFormProps,
  FormFieldConfig,
  SubmitStatus,
} from './types';

const EMPTY_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

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
  const styles = useMemo(() => buildStyles(theme), [theme]);

  const [config, setConfig] = useState<FormFieldConfig>({
    phoneVisible: showPhone,
    phoneRequired: requirePhone,
    subjectVisible: showSubject,
    subjectRequired: requireSubject,
  });
  const [configLoading, setConfigLoading] = useState(Boolean(publicKey));
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [formError, setFormError] = useState('');

  // The validation schema depends on config, which can arrive asynchronously in
  // managed mode. Keep a stable resolver that reads the latest config from a ref
  // and rebuilds the Zod schema on each validation pass.
  const configRef = useRef(config);
  configRef.current = config;
  const resolver = useCallback<Resolver<ContactFormData>>(
    (values, context, options) =>
      (zodResolver(buildContactSchema(configRef.current)) as Resolver<ContactFormData>)(
        values,
        context,
        options,
      ),
    [],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver,
    defaultValues: EMPTY_FORM,
    mode: 'onTouched',
  });

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

  const onValid = async (values: ContactFormData) => {
    setFormError('');

    // Zod already trimmed the values; only forward visible, non-empty optionals.
    const data: ContactFormData = {
      name: values.name,
      email: values.email,
      message: values.message,
      ...(config.phoneVisible && values.phone ? { phone: values.phone } : {}),
      ...(config.subjectVisible && values.subject ? { subject: values.subject } : {}),
    };

    try {
      if (publicKey) {
        await submitToFormDash(apiUrl, publicKey, data);
      } else if (onSubmit) {
        await onSubmit(data);
      } else {
        throw new Error('ContactForm needs either a publicKey or an onSubmit handler');
      }
      setStatus('success');
      reset(EMPTY_FORM);
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
          {...register(key)}
          {...inputProps}
        />
      ) : (
        <input
          id={`formdash-${key}`}
          style={styles.input}
          {...register(key)}
          {...inputProps}
        />
      )}
      {errors[key] && <p style={styles.fieldError}>{errors[key]?.message}</p>}
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
        <form style={styles.form} onSubmit={handleSubmit(onValid)} noValidate>
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
              ...(isSubmitting ? styles.buttonDisabled : {}),
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : submitLabel}
          </button>
        </form>
      )}
    </div>
  );
}
