import { z } from 'zod';
import type { FormFieldConfig } from './types';

// Client-side mirror of the server's dynamic submission schema
// (server: src/app/utils/buildDynamicSchema.ts) so visitors get instant
// feedback while the server stays the final authority. Phone/subject rules
// follow the live Form Config (managed mode) or the component props (standalone).
//
// `.trim()` both validates against whitespace-only input and yields trimmed
// values to the submit handler, so the payload is clean without extra work.
export function buildContactSchema(config: FormFieldConfig) {
  const optionalText = (max: number, label: string) =>
    z.string().trim().max(max, `${label} must be ${max} characters or fewer`).optional();

  const requiredText = (max: number, label: string) =>
    z
      .string()
      .trim()
      .min(1, `${label} is required`)
      .max(max, `${label} must be ${max} characters or fewer`);

  return z.object({
    name: requiredText(100, 'Name'),
    email: z
      .string()
      .trim()
      .min(1, 'Email is required')
      .email('Invalid email address'),
    phone: config.phoneVisible
      ? config.phoneRequired
        ? requiredText(20, 'Phone')
        : optionalText(20, 'Phone')
      : z.string().optional(),
    subject: config.subjectVisible
      ? config.subjectRequired
        ? requiredText(200, 'Subject')
        : optionalText(200, 'Subject')
      : z.string().optional(),
    message: requiredText(5000, 'Message'),
  });
}
