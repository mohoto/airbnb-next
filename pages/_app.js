import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout/Layout'
import { store, persistor } from '../lib/redux/store'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/global.css'
import Router from 'next/router'

import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: '#FF385C',
  className: 'z-50',
  delay: 50
});

Router.events.on('routeChangeStart', () => {
  progress.start();
});
Router.events.on('routeChangeComplete', () => {
  progress.finish();
});
Router.events.on('routeChangeError', () => {
  progress.finish();
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate> 
    </Provider>
  )
}

export default MyApp
