import '../styles/globals.css'
import '../styles/All.scss'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Provider } from 'react-redux'
import { store } from './../Redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {

   return(
      <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
             <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
        
        
          
        
    </>
   
   )
 
 
 

  
}

export default MyApp






