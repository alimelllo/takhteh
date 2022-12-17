import '../styles/globals.css';
import "animate.css/animate.min.css";
import ThemeContextProvider from '../context/ThemeContext';
import { useState , useEffect } from 'react'; 
import 'react-loading-skeleton/dist/skeleton.css'
import { Loading } from '../components/Loading.js'



function MyApp({ Component, pageProps }) {

   const [ loading, setLoading ] = useState(true);

   useEffect(() => {
      setLoading(false);
    }, []);

   return (
         <>
           { !loading ? (
         <ThemeContextProvider>
            <Component {...pageProps} />  
         </ThemeContextProvider>
           ) : (<Loading />)}
         </>
      ) 
}


export default MyApp;
