import React, { useState } from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularProducts from '../components/PopularProducts'
import { useSelector, useDispatch } from 'react-redux'
import { empActions } from '../reducers/empslice';

export default function Dashboard() {
	const totalEmployee = useSelector((state) => state.emp)
	
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid totalEmployee={totalEmployee.length}/>
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
	)
}
