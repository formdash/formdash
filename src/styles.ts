import type { CSSProperties } from 'react';

interface Palette {
  bg: string;
  text: string;
  muted: string;
  border: string;
  inputBg: string;
  accent: string;
  accentText: string;
  error: string;
  success: string;
}

const palettes: Record<'light' | 'dark', Palette> = {
  light: {
    bg: '#ffffff',
    text: '#18181b',
    muted: '#71717a',
    border: '#e4e4e7',
    inputBg: '#ffffff',
    accent: '#18181b',
    accentText: '#ffffff',
    error: '#dc2626',
    success: '#16a34a',
  },
  dark: {
    bg: '#18181b',
    text: '#fafafa',
    muted: '#a1a1aa',
    border: '#3f3f46',
    inputBg: '#27272a',
    accent: '#fafafa',
    accentText: '#18181b',
    error: '#f87171',
    success: '#4ade80',
  },
};

export function buildStyles(theme: 'light' | 'dark') {
  const p = palettes[theme];
  const font =
    'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

  return {
    root: {
      fontFamily: font,
      backgroundColor: p.bg,
      color: p.text,
      border: `1px solid ${p.border}`,
      borderRadius: 12,
      padding: 24,
      maxWidth: 480,
      boxSizing: 'border-box',
    } as CSSProperties,
    title: {
      margin: 0,
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.3,
    } as CSSProperties,
    description: {
      margin: '6px 0 0',
      fontSize: 14,
      color: p.muted,
      lineHeight: 1.5,
    } as CSSProperties,
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 18,
    } as CSSProperties,
    field: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
    } as CSSProperties,
    label: {
      fontSize: 13,
      fontWeight: 500,
    } as CSSProperties,
    optional: {
      color: p.muted,
      fontWeight: 400,
    } as CSSProperties,
    input: {
      fontFamily: font,
      fontSize: 14,
      padding: '9px 12px',
      borderRadius: 8,
      border: `1px solid ${p.border}`,
      backgroundColor: p.inputBg,
      color: p.text,
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
    } as CSSProperties,
    textarea: {
      resize: 'vertical',
      minHeight: 110,
    } as CSSProperties,
    fieldError: {
      fontSize: 12,
      color: p.error,
      margin: 0,
    } as CSSProperties,
    button: {
      fontFamily: font,
      fontSize: 14,
      fontWeight: 600,
      padding: '11px 16px',
      borderRadius: 8,
      border: 'none',
      backgroundColor: p.accent,
      color: p.accentText,
      cursor: 'pointer',
      marginTop: 4,
    } as CSSProperties,
    buttonDisabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
    } as CSSProperties,
    formError: {
      fontSize: 13,
      color: p.error,
      backgroundColor: theme === 'light' ? '#fef2f2' : '#451a1a',
      border: `1px solid ${theme === 'light' ? '#fecaca' : '#7f1d1d'}`,
      borderRadius: 8,
      padding: '10px 12px',
      margin: 0,
    } as CSSProperties,
    successBox: {
      textAlign: 'center',
      padding: '28px 8px',
    } as CSSProperties,
    successIcon: {
      fontSize: 36,
      color: p.success,
      lineHeight: 1,
    } as CSSProperties,
    successText: {
      fontSize: 15,
      margin: '12px 0 18px',
      lineHeight: 1.5,
    } as CSSProperties,
    linkButton: {
      fontFamily: font,
      fontSize: 13,
      fontWeight: 500,
      background: 'none',
      border: `1px solid ${p.border}`,
      borderRadius: 8,
      padding: '8px 14px',
      color: p.text,
      cursor: 'pointer',
    } as CSSProperties,
    skeleton: {
      height: 220,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: p.muted,
      fontSize: 14,
    } as CSSProperties,
  };
}
