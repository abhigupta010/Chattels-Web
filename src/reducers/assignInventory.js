import { createSlice } from '@reduxjs/toolkit';
import {newInventoryDetails} from '../Constant'
const initialState =newInventoryDetails;

export const assignedInventorySlice = createSlice({
  name: 'assignedinventory',
  initialState,
  reducers: {
    edit: (state, action) => {
        const updatedData = action.payload;
    
  
        const index = state.findIndex((item) => item.id === updatedData.id);
  
        if (index !== -1) {
          // Create a new array with the updated item
          const newState = [...state];
          newState.splice(index, 1, updatedData);
  
          return newState;
        }
  
        // If item not found, return the current state unchanged
        return state;
      },
    delete:(state,action)=>
    {
      const emp_id=action.payload.id;
      const newarray=state.filter((emp)=>
      {
        return emp.id !== emp_id;
      })
      return newarray;


    },
    add:(state,action)=>
    {  
         const newdata=action.payload;
      
         const result=[...state, newdata];
      
         return result;
    }

}
});

// Action creators are generated for each case reducer function

export const assignedInventoryActions = assignedInventorySlice.actions;

export default assignedInventorySlice;
