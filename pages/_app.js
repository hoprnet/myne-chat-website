import { useState, useEffect } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Loader from '../components/atoms/loader';

import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const onFinishLoading = () => {
    setLoading(false);
  };
  useEffect(() => {
    window.addEventListener('load', onFinishLoading);
    return () => window.removeEventListener('load', onFinishLoading);
  }, []);
  return (
    <ToastProvider>
      {loading && <Loader />}
      <div className="fadeIn">
        <Component {...pageProps} />
      </div>
    </ToastProvider>
  );
}

export default MyApp;
