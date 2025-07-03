import Layout from '@/components/Layout';
import '@/styles/globals.css'; // or whatever global CSS you use

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
