'use client'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";


//import {mode} from '@chakra-ui/theme-tools'

// const styles = {
// 	global: (props) => ({
// 		body: {
// 			bg: mode("gray.100", "#000")(props),
// 		},
// 			color: mode("gray.800", "whiteAlpha.900")(props),
// 	}),
// }

const conf = {
  initialColorMode : 'dark',
  useSystemColorMode : 'false',
}

const exttheme = extendTheme({conf})   // provide with styles for custom styling

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={exttheme}>
        <App/>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
