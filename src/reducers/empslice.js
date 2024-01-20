import { createSlice } from '@reduxjs/toolkit';
import { empDetails } from '../Constant'
const initialState =empDetails;

export const empSlice = createSlice({
  name: 'emp',
  initialState,
  reducers: {
    edit: (state, action) => {
        const updatedData = action.payload;
        console.log(updatedData, 'updatedData');
        console.log(state, 'state');
  
        const index = state.findIndex((item) => item.emp_id === updatedData.emp_id);
  
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
      const emp_id=action.payload.emp_id;
      const newarray=state.filter((emp)=>
      {
        return emp.emp_id != emp_id;
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

export const empActions = empSlice.actions;

export default empSlice;
