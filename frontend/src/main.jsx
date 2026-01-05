import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { CartProvider } from "./context/cartcontext";
createRoot(document.getElementById('root')).render(
  <CartProvider>
  <StrictMode>
    <App />
  </StrictMode>
    </CartProvider>
)
