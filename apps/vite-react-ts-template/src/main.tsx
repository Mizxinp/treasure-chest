import React from 'react'
import ReactDOM from 'react-dom/client'
import { recoil } from 'state'
import App from './App'
// import { Provider } from 'jotai';
import './index.css'
import { Context } from './store/context';
import Provider from "@/common/frame/jotai/Provider";

const { RecoilRoot } = recoil

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider>
    <App />
  </Provider>
  // </React.StrictMode>
)
