// ** Imports
import React from 'react'
import { Outlet } from 'react-router-dom'

// ** UI
import Navbar from './Navbar/Navbar'

// ** UI
import Sidebar from './sidebar/Sidebar'

const Layout = () => {
	return (
		<div className="flex flex-row h-screen w-screen">
			<Sidebar />
			<div className="pr-4 w-screen">
				<Navbar />
				<div>{<Outlet />}</div>
			</div>
		</div>
	)
}

export default Layout
