import React, { Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Provider } from "react-redux";
import {store} from "./store";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['uz', 'en'],
        fallbackLng: 'en',
        // debug: true,
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: "/languages/{{lng}}/translation.json"
        },
        react: {
            useSuspense: false
        }
    });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={'Loading'}>
      <Provider store={store()}>
          <React.StrictMode>
              <App />
          </React.StrictMode>
      </Provider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
