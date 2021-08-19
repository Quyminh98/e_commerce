import { createSlice } from '@reduxjs/toolkit';
import productList from '../../assets/productList'

const initialList = [];

const list = createSlice({
    name: 'list',
    initialState: initialList,
    reducers: {
        addFilter: (state, action) => {
            let newList = []
            action.payload.forEach(filterItem => {
                const result = productList.filter(item => {
                    return item.category === filterItem
                })
                newList = newList.concat(result)
            })
            return newList;
        },
        clearFilter: (state, action) => {
            return productList
        }
    }
})

const {reducer, actions} = list;
export const {addFilter, clearFilter} = actions;
export default reducer;