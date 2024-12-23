import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./components/ui/provider";

//import {mode} from '@chakra-ui/theme-tools'

// const styles = {
// 	global: (props) => ({
// 		body: {
// 			bg: mode("gray.100", "#000")(props),
// 		},
// 			color: mode("gray.800", "whiteAlpha.900")(props),
// 	}),
// }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App/>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
