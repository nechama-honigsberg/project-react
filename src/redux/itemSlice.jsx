import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [{ id: 1, name: 'book' }, { id: 2, name: 'pen' }],
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addItem } = itemSlice.actions;
export default itemSlice.reducer; // Corrected the slice name here as well
