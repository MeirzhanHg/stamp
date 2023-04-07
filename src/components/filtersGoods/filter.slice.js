import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const filtersGoodsAdapter = createEntityAdapter()

const initialState = filtersGoodsAdapter.getInitialState({
    filtersLoadingStatus: 'idle',
    term: '',
    filterActive: 'all'
})

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    async () => {
        const {request} = useHttp();
        return await request('http://localhost:3001/buttonsFilters')
    }
)

console.log(initialState);

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersChanged: (state, action) => {
            // state.filterActive = action.payload;
            state.filterActive = state.filterActive === action.payload ? 'all' : action.payload
        },
        filtersSearch: (state, action) => {
            state.term = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, state => {
                state.filtersLoadingStatus = 'loading'
            })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filtersLoadingStatus = 'idle'
                filtersGoodsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchFilters.rejected, state => {
                state.filtersLoadingStatus = 'error'
            })
            .addDefaultCase(() => {})
    }
})

const {reducer, actions} = filtersSlice;

export const {selectAll} = filtersGoodsAdapter.getSelectors(state => state.filters)

export default reducer

export const {
    filtersChanged, 
    filtersSearch
} = actions