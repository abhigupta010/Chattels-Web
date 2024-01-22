import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import AssignedInventory from './pages/AssignedInventory'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import EmployeeDetails from './pages/EmployeeDetails'
import { Home } from './components/shared/Home'
function App() {
    return (            
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="inventory" element={<Inventory />} />
                     <Route path="/assignedinventory" element={<AssignedInventory />} />
                     <Route path="/employees" element={<EmployeeDetails />} />
                     
                </Route>
                <Route index element={<Home />} />
            </Routes>
        </Router>
    )
}


export default App
