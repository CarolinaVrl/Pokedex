import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const trainerNameSlice = createSlice({
		name: 'trainerName',
    initialState: "a",
    reducers: {
        changeName:(state,action)=>{
            const text= action.payload
            return text;

        }
        
    }
})

export const { changeName } = trainerNameSlice.actions;

export default trainerNameSlice.reducer;