import { ContactForm } from '@formdash/react';

// Local smoke test for @formdash/react against the dev backend.
// Replace the key with any active organization's public key.
const PUBLIC_KEY = 'fd_live_cc762db010bddceca93f0e5d2159e5fc';
const API_URL = 'http://localhost:5000/api/v1';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 32,
        padding: 32,
        background: '#f4f4f5',
        minHeight: '100vh',
        alignItems: 'flex-start',
      }}
    >
      <ContactForm
        publicKey={PUBLIC_KEY}
        apiUrl={API_URL}
        description="Managed mode — submissions land in the FormDash dashboard."
        onSuccess={(data) => console.log('managed success', data)}
        onError={(err) => console.error('managed error', err)}
      />
      <ContactForm
        title="Standalone Mode"
        description="No backend — data goes to your own handler."
        theme="dark"
        requireSubject
        showPhone={false}
        onSubmit={async (data) => {
          console.log('standalone submit', data);
        }}
      />
    </div>
  );
}
