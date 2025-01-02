import { useEffect } from 'react';
import '../app/Global.css';
import "bootstrap/dist/css/bootstrap.css"

export default function MyApp({ Component, pageProps }) {
    useEffect(()=>{
      require('bootstrap/js/index.esm');
    },[])
  return <Component {...pageProps} />
}