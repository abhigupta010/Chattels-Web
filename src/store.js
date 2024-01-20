import { configureStore } from '@reduxjs/toolkit'
import empslice from './reducers/empslice'
import inventorySlice from './reducers/inventorySlice'
import assignedInventorySlice from './reducers/assignInventory'
export const store = configureStore({
  reducer: {
    emp: empslice.reducer,
    inventory: inventorySlice.reducer,
    assignedinventory: assignedInventorySlice.reducer
  },
})

