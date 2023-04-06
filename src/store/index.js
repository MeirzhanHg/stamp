import { configureStore } from "@reduxjs/toolkit";
import goods from '../components/ourCoffeeGoods/ourCoffeeGoodsSlice';
import filters from '../components/ourCoffeeFilter/filter.slice';

// хранилище
export const store = configureStore({
    reducer: {goods, filters},
    devTools: process.env.NODE_ENV !== 'production'
});