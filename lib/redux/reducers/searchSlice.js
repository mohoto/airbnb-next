import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: '',
    startDate: '',
    enddate: '',
    numberGuest: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.location = action.payload.location;
            state.startDate = action.payload.startDate;
            state.endDate = action.payload.endDate;
            state.numberGuest =  action.payload.numberGuest;
        }
    }
});

export const {setSearch} = searchSlice.actions;
export const selectSearch = state => state.search;

export default searchSlice.reducer;