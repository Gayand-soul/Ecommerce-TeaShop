import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { ReactDom } from 'react-dom/client'
import {store} from './components/Shop/index.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />

    </Provider>
    
  </StrictMode>,
)
