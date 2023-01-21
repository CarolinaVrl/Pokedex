import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const trainerSlice = createSlice({
		name: 'trainer',
    initialState: "",
    reducers: {
        changeName:(state,action)=>{
            const text= action.payload
            return text;

        }
        
    }
})

export const { changeName } = trainerSlice.actions;

export default trainerSlice.reducer;