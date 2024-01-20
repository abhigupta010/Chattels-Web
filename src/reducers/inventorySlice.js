import { createSlice } from '@reduxjs/toolkit';
import { invontoryDetails } from '../Constant'
const initialState =invontoryDetails;

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    edit: (state, action) => {
        const updatedData = action.payload;
        console.log(updatedData, 'updatedData');
        console.log(state, 'state');
  
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
        return emp.id != emp_id;
      })
      return newarray;

    },
    add:(state,action)=>
    {  
         const newdata=action.payload;
         console.log(newdata);
         const result=[...state, newdata];
         console.log(result);
         return result;
    }

}
});

// Action creators are generated for each case reducer function

export const inventoryActions = inventorySlice.actions;

export default inventorySlice;
