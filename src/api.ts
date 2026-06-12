import type { ContactFormData, FormFieldConfig } from './types';

export const DEFAULT_API_URL = 'https://api.formdash.io/api/v1';

interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data?: T;
}

async function parseEnvelope<T>(res: Response): Promise<T> {
  let body: ApiEnvelope<T> | null = null;
  try {
    body = (await res.json()) as ApiEnvelope<T>;
  } catch {
    /* non-JSON response */
  }
  if (!res.ok || !body?.success) {
    throw new Error(body?.message ?? `Request failed (${res.status})`);
  }
  return body.data as T;
}

export async function fetchFormConfig(
  apiUrl: string,
  publicKey: string,
): Promise<FormFieldConfig & { orgName: string }> {
  const res = await fetch(`${apiUrl}/form-config/${encodeURIComponent(publicKey)}`);
  return parseEnvelope(res);
}

export async function submitToFormDash(
  apiUrl: string,
  publicKey: string,
  data: ContactFormData,
): Promise<void> {
  const res = await fetch(`${apiUrl}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ publicKey, ...data }),
  });
  await parseEnvelope(res);
}
