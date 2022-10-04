// ** Imports
import React from 'react'
import { Outlet } from 'react-router-dom'

// ** UI
import Sidebar from './sidebar/Sidebar'

const Layout = () => {
	return (
		<div className="flex flex-row h-screen w-screen overflow-hidden">
			<Sidebar />
			<div className="px-4">
				<div>Header</div>
				<div>{<Outlet />}</div>
			</div>
		</div>
	)
}

export default Layout
