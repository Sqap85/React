import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client'; 
import './index.css'; 
import App from './App.jsx'; 
import store from './redux/store'; 
// Daha önce oluşturduğumuz Redux store'u (uygulamanın merkezi durum deposu) import ediyoruz.
import { Provider } from 'react-redux'; 
// Redux'un `Provider` bileşenini import ediyoruz. Bu, Redux store'un uygulamanın tüm bileşenlerine erişmesini sağlar.

createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    {/* Redux store'u tüm bileşenlere erişilebilir hale getirmek için uygulamayı Provider ile sarıyoruz. */}
    
    <App />
    {/* Uygulamanın ana bileşeni olan App'i render ediyoruz. */}
  </Provider>
);