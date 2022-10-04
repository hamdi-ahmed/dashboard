import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
// import { CgProfile } from 'react-icons/cg'
import Avatar from 'react-avatar'

const Navbar = () => {
	return (
		<div className="w-full md:w-auto flex flex-row justify-between content-center p-5 mb-5">
			<div className="flex flex-row items-center border bg-neutral-100">
				<AiOutlineSearch className="ml-1 mr-1" size={24} />
				<input
					type="text"
					placeholder="Search or Type"
					className="bg-neutral-100 h-10 border-0 outline-0 focus:border-0...; active:border-0...;"
				/>
			</div>
			<div className="flex flex-row">
				<IoMdNotificationsOutline className="mr-1 text-violet-200" size={35} />
				<Avatar
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBe5Igc8SdI-Cs9h16Wq2oYIH7FxbO2W9P5g&usqp=CAU"
					size={35}
					className="text-violet-200"
					round={true}
				/>
			</div>
		</div>
	)
}

export default Navbar
