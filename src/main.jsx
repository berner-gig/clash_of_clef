import {StrictMode} from 'react'
import './index.css'
import {BrowserRouter,} from 'react-router-dom'
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import {AppProvider} from "@pixi/react";
import {Application} from "pixi.js";
import {initDevtools} from "@pixi/devtools";
import WebApp from "@twa-dev/sdk";

const app = createRoot(document.getElementById('root'))

const pixiApp = new Application()
initDevtools({
	pixiApp
})

app.render(
	<StrictMode>
		<BrowserRouter>
			<AppProvider value={pixiApp}>
				<App/>
			</AppProvider>
		</BrowserRouter>
	</StrictMode>,
)
