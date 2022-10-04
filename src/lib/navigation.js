import { BsFillGridFill } from "react-icons/bs";
import { IoCarSportSharp, IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

export const dashboardSidebarLinksTop = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <BsFillGridFill />
	},
	{
		key: 'cars',
		label: 'Cars',
		path: '/cars',
		icon: <IoCarSportSharp />
	}
]

export const dashboardSidebarLinksBottom = [
	{
		key: 'settings',
		label: 'Settings',
		icon: <IoSettingsOutline />
	},
	{
		key: 'logout',
		label: 'Logout',
		icon: <FiLogOut />
	}
]
