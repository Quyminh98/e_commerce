import { createSlice } from '@reduxjs/toolkit';

const initialCart = localStorage.getItem('cart') 
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

const cart = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        addCart: (state, action) => {
            console.log('add to cart ', action.payload )
            const itemIndex = state.findIndex(product => product.id === action.payload.id);
            if (itemIndex >= 0) {
                state[itemIndex].quantity += 1;
            } else {
                const item = {
                    ...action.payload,
                    quantity: 1
                }
                state.push(item)
            }
            localStorage.setItem('cart', JSON.stringify(state) );
        },
        deleteCart: (state, action) => {
            console.log('add to cart ', action.payload )
            const newState = state.filter(product => product.id !== action.payload.id)

            localStorage.setItem('cart', JSON.stringify(newState) );
            return newState;
        },
        addProducts: (state, action) => {
            console.log('add products ', action.payload )
            const itemIndex = state.findIndex(product => product.id === action.payload.id);
            if (itemIndex >= 0) {
                state[itemIndex].quantity += action.payload.quantity;

            } else {
                state.push(action.payload)
            }
            localStorage.setItem('cart', JSON.stringify(state) );
        },
        addQuantity: (state, action) => {
            const itemIndex = state.findIndex(product => product.id === action.payload.id);
            state[itemIndex].quantity += 1;
            console.log('add quantity ', state[itemIndex].quantity );
            localStorage.setItem('cart', JSON.stringify(state) );
        },
        subtractQuantity: (state, action) => {
            const itemIndex = state.findIndex(product => product.id === action.payload.id);
            if(state[itemIndex].quantity >=2) {
                state[itemIndex].quantity -= 1;
                console.log('add quantity ', state[itemIndex].quantity );
                localStorage.setItem('cart', JSON.stringify(state) );
            }
        },
    }
});

const {reducer, actions} = cart;
export const {addCart , deleteCart, addQuantity, subtractQuantity, addProducts} = actions;
export default reducer;