import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import AssignedInventory from './pages/AssignedInventory'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import EmployeeDetails from './pages/EmployeeDetails'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="inventory" element={<Inventory />} />
                     <Route path="/assignedinventory" element={<AssignedInventory />} />
                     <Route path="/employees" element={<EmployeeDetails />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
