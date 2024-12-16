import {Suspense} from 'react'
import './App.css'
import {useRoutes} from "react-router-dom";

import routes from '~react-pages'
import Loading from "./components/Loading.jsx";

function App() {
	return (
		<Suspense fallback={<Loading/>}>
			{useRoutes(routes)}
		</Suspense>
	)
}

export default App
