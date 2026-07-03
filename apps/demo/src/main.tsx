import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@astryxdesign/core/reset.css'
import '@scentre/theme/theme.css'
import './index.css'

import { Theme } from '@astryxdesign/core/theme'
import { scentreTheme } from '@scentre/theme/scentre'

import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme theme={scentreTheme}>
      <App />
    </Theme>
  </StrictMode>,
)
