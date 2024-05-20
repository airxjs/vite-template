import { Signal } from 'signal-polyfill'
import * as Airx from 'airx'

import App from './App.tsx'
import './index.css'

Reflect.defineProperty(window, 'Signal', { value: Signal })

Airx.createApp(<App />).mount(document.getElementById('root')!)
