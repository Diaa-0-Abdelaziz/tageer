import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fontsource-variable/cairo";
import i18n, { loadBootstrap, LANGUAGES } from "./i18n";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
// Bootstrap is swapped between its LTR and RTL builds, so wait for it before first paint.
loadBootstrap(LANGUAGES[i18n.language].dir).then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
reportWebVitals();
