export default function EnvDebug() {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Environment Variables Debug</h1>
      <ul>
        <li>GOOGLE_CLIENT_ID: {process.env.GOOGLE_CLIENT_ID ? '✅ SET' : '❌ MISSING'}</li>
        <li>GOOGLE_CLIENT_SECRET: {process.env.GOOGLE_CLIENT_SECRET ? '✅ SET' : '❌ MISSING'}</li>
        <li>NEXTAUTH_URL: {process.env.NEXTAUTH_URL ? '✅ SET' : '❌ MISSING'}</li>
        <li>NEXTAUTH_SECRET: {process.env.NEXTAUTH_SECRET ? '✅ SET' : '❌ MISSING'}</li>
      </ul>
      <p>Check your browser console for more detailed logs.</p>
    </div>
  );
}