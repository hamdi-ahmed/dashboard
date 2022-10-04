// ** Imports
import classNames from 'classnames'
import React from 'react'
import { AiFillAmazonCircle } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { dashboardSidebarLinksBottom, dashboardSidebarLinksTop } from '../../../lib/navigation'

// ** Styling
const linkClasses =
	'flex item-center gap-2 font-light px-3 py-2 hover:bg-violet-500 hover:text-white hover:underline active:bg-blue-500 rounded-sm text-base'

const Sidebar = () => {
	const { pathname } = useLocation()
	return (
		<div className="flex flex-col p-3 w-60">
			<div className="flex items-center gap-2 px-1 py-3">
				<AiFillAmazonCircle className="text-violet-500" fontSize={30} />
				<span className="text-bold">Motiv.</span>
			</div>
			<div className="flex-1 flex flex-col py-8 gap-0.5">
				{dashboardSidebarLinksTop.map((ele) => (
					<Link
						className={classNames(
							pathname === ele.path && 'bg-slate-100 text-black',
							linkClasses
						)}
						to={ele.path}
						key={ele.key}
					>
						<span className="text-xl">{ele.icon}</span>
						{ele.label}
					</Link>
				))}
			</div>
			<div>
				{dashboardSidebarLinksBottom.map((ele) => (
					<div
						className={classNames(
							linkClasses,
							'cursor-pointer'
						)}
						key={ele.key}
					>
						<span className="text-xl">{ele.icon}</span>
						{ele.label}
					</div>
				))}
			</div>
		</div>
	)
}

export default Sidebar
