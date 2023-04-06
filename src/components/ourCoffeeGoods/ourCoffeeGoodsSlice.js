import coffeeGoods from '../../resources/img/aromistico-coffee.jpg'

import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';
import { renderIntoDocument } from 'react-dom/test-utils';

const goodsAdapter = createEntityAdapter()

const initialState = goodsAdapter.getInitialState({
    goodsLoadingStatus: 'idle',
})

console.log(initialState);

export const fetchGoods = createAsyncThunk(
    'goods/fetchGoods',
    async () => {
        const {request} = useHttp()
        return await request('http://localhost:3001/goods')
    }
)

const ourCoffeeGoodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        filterGoods: (state, action) => {
            state.filter = state.filter === action.payload ? 'all' : action.payload
        },
        onInputSearch: (state, action) => {
            state.term = action.payload
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(fetchGoods.pending, state => {
                state.goodsLoadingStatus = 'loading'
            })
            .addCase(fetchGoods.fulfilled, (state, action) => {
                state.goodsLoadingStatus = 'idle'
                // state.goods = action.payload
                goodsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchGoods.rejected, state => {
                state.goodsLoadingStatus = 'error'
            })
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = ourCoffeeGoodsSlice;

export default reducer;

export const {selectAll} = goodsAdapter.getSelectors(state => state.goods);

// Здесь мы получаем отфильтрованные данные
export const filteredGoodsSelector = createSelector(
    (state) => state.filters.filterActive,
    selectAll,
    (filter, goods) => {
        if(filter === 'all'){ 
            return goods;
        } else {
            return goods.filter(item => item.name === filter);
        }
    }
)

export const  {
    filterGoods,
    onInputSearch
} = actions