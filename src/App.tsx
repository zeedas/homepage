import store from './store'
import persistStore from 'redux-persist/es/persistStore'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Routes } from 'react-router-dom'
import IndexRoutes from './routes/index.routes'
import { HelmetProvider } from 'react-helmet-async'
import useApp from './context/app'

function App() {
  const { pageTitle } = useApp();
  const persistor = persistStore(store)
  return (
    <HelmetProvider>
      <Helmet>
        <title> {pageTitle} | FeedVote </title>
      </Helmet>
      <BrowserRouter>
        <IndexRoutes />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
