import React from 'react'
import { IoPersonCircleSharp, } from 'react-icons/io5'
import { ImDatabase } from "react-icons/im";
import { MdAssignmentTurnedIn,MdOutlineAutoDelete } from "react-icons/md";

export default function DashboardStatsGrid({ totalEmployee}) {
	
	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoPersonCircleSharp className="text-4xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Employees</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{totalEmployee}</strong>
						<span className="text-sm text-green-500 pl-2">Working</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<ImDatabase className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Inventory</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">1200</strong>
						<span className="text-sm text-green-500 pl-2">Purchased</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<MdAssignmentTurnedIn className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Assigned Inventory</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">1000</strong>
						<span className="text-sm text-red-500 pl-2">Avail-150</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<MdOutlineAutoDelete className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Defected Inventory</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">35</strong>
						<span className="text-sm text-red-500 pl-2">Resold-15</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
