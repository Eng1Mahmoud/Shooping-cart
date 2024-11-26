import { createSlice } from '@reduxjs/toolkit'
let initState = {
    itemCart: [],
    existElement: false,
    countElement: 0,
    popupMessage: "",
    show: false,



}
let CartSlice = createSlice({

    name: "Cart",
    initialState: initState,
    reducers: {
        add(state, action) {
            state.existElement = false
            state.show = true
            const exist = state.itemCart.find((e) => {
                return e.id === action.payload.id
            })
            if (!exist) {
                state.itemCart.push({
                    ...action.payload,
                    count: 1
                })
                state.countElement += 1
                state.popupMessage = "Success! Item added to cart"
            }
            else {
                state.existElement = true
                state.popupMessage = "This item already exists in cart"
            }
        },

        Delete(state, action) {
            state.itemCart = state.itemCart.filter((e) => {
                return e.id !== action.payload.id
            })
            state.countElement -= 1
            state.popupMessage = "Item removed from cart"
            state.show = true
        },
        incres(state, action) {
            const item = state.itemCart.find((e) => e.id === action.payload.id)
            if (item) {
                item.count += 1
            }
        },
        decres(state, action) {
            const item = state.itemCart.find((e) => e.id === action.payload.id)
            if (item && item.count > 1) {
                item.count -= 1
            }
        },
        show(state) {
            state.show = false
        }

    }
})
export const { add, Delete, incres, decres, show } = CartSlice.actions
export default CartSlice.reducer
