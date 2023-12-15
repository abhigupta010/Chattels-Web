import { HiOutlineViewGrid, HiOutlineUsers, HiOutlineQuestionMarkCircle, HiOutlineCog } from 'react-icons/hi'
import { MdOutlineInventory2, MdOutlineAssignmentTurnedIn } from 'react-icons/md';

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'inventory',
        label: 'Inventory',
        path: '/inventory',
        icon: <MdOutlineInventory2 />
    },
    {
        key: 'assignedinventory',
        label: 'Assigned Inventory',
        path: '/assignedinventory',
        icon: <MdOutlineAssignmentTurnedIn />
    },
    {
        key: 'employees',
        label: 'Employees Details',
        path: '/employees',
        icon: <HiOutlineUsers />
    }
    // {
    // 	key: 'transactions',
    // 	label: 'Transactions',
    // 	path: '/transactions',
    // 	icon: <HiOutlineDocumentText />
    // },
    // {
    // 	key: 'messages',
    // 	label: 'Messages',
    // 	path: '/messages',
    // 	icon: <HiOutlineAnnotation />
    // }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]
