import { StrictMode } from 'react'; // React'in daha sıkı denetim modu
import { createRoot } from 'react-dom/client'; // React 18 render yöntemi
import './index.css'; // Global CSS dosyası
import App from './App'; // Ana bileşeni içe aktarır

// Root elementini bul ve App bileşenini render et
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Ana bileşen olan App render edilir */}
  </StrictMode>
);
