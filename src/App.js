// ** Imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// ** UI
import Cars from './views/cars/Cars'
import Dashboard from './views/dashboard/Dashboard'
import Layout from './components/shared/Layout'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='cars' element={<Cars />} />
        </Route>
			</Routes>
		</Router>
	)
}

export default App
