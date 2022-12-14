import React from 'react'
import ReactDOM from 'react-dom/client'
import { recoil } from 'state'
import App from './App'
import './index.css'

const { RecoilRoot } = recoil

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RecoilRoot>
    <App />
  </RecoilRoot>
  // </React.StrictMode>
)
