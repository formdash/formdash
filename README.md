# @formdash/react

Drop-in React contact form. In **managed mode** submissions go straight to your [FormDash](https://formdash.io) dashboard — your site needs **no backend, no database, no email setup**.

## Install

```bash
npm install @formdash/react
```

Requires React 18+.

## Managed mode (recommended)

Create an organization in your FormDash dashboard, copy its public key, and drop the form anywhere:

```tsx
import { ContactForm } from '@formdash/react';

export default function ContactPage() {
  return <ContactForm publicKey="fd_live_xxxxxxxxxxxxxxxx" />;
}
```

That's it. Submissions appear in your FormDash dashboard, email notifications follow your plan, and which fields are shown (phone, subject) follows your dashboard **Form Config** — change settings there and every embedded form updates automatically.

## Standalone mode

Want only the UI and handle the data yourself? Omit `publicKey` and pass `onSubmit`:

```tsx
<ContactForm
  onSubmit={async (data) => {
    await fetch('/my-own-endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }}
  showPhone={false}
  requireSubject
/>
```

Throw (or reject) inside `onSubmit` to show the visitor an error state.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `publicKey` | `string` | — | Managed mode. Your org's `fd_live_...` key. |
| `onSubmit` | `(data) => void \| Promise<void>` | — | Standalone mode handler. |
| `apiUrl` | `string` | FormDash cloud | Override for self-hosted / local dev. |
| `showPhone` / `requirePhone` | `boolean` | `true` / `false` | Standalone only — managed mode follows your dashboard. |
| `showSubject` / `requireSubject` | `boolean` | `true` / `false` | Standalone only. |
| `title` | `string` | `"Contact Us"` | Pass `""` to hide. |
| `description` | `string` | — | Paragraph under the title. |
| `submitLabel` | `string` | `"Send Message"` | |
| `successMessage` | `string` | thank-you text | Shown after success. |
| `theme` | `"light" \| "dark"` | `"light"` | |
| `className` | `string` | — | Extra class on the root element. |
| `onSuccess` | `(data) => void` | — | After a successful submission. |
| `onError` | `(error) => void` | — | When a submission fails. |

The form ships with self-contained inline styles — no CSS import needed. `theme="dark"` for dark sites; use `className` for further overrides.

## Validation

Fields are validated in the browser (instant feedback) and again on the FormDash server (final authority): name ≤ 100 chars, valid email, message ≤ 5000 chars, phone ≤ 20, subject ≤ 200, plus your per-org required-field settings.

## Local development against a self-hosted FormDash

```tsx
<ContactForm
  publicKey="fd_live_xxxxxxxxxxxxxxxx"
  apiUrl="http://localhost:5000/api/v1"
/>
```
