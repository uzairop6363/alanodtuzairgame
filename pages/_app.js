import '../styles/globals.css';
import { useBackgroundMusic } from '../hooks/useSound';

export default function MyApp({ Component, pageProps }) {
  useBackgroundMusic();
  return <Component {...pageProps} />;
}
