import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@react95/icons/icons.css';
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import Provider from './components/boot/Provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
