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
            const exist = state.itemCart.find((e) => {
                return e.id === action.payload.id
            })
            if (!exist) {
                state.itemCart.push(action.payload)
                state.countElement += 1
                state.popupMessage = "sucsess you add item"
                state.show = true

            }
            else {
                state.existElement = true
                state.popupMessage = "this item exist in cart"
                state.show = true
            }

        },

        deleat(state, action) {
            const exist = state.itemCart.find((e) => {
                return e.id === action.payload.id
            })
            const index = state.itemCart.indexOf(exist)
            console.log(index)
            state.itemCart.splice(index, 1)
            state.countElement -= 1
            state.popupMessage = "deleat item from cart"
            state.show = true
        },
        incres(state, action) {

            const exist = state.itemCart.find((e) => {
                return e.id === action.payload.id
            })
            const index = state.itemCart.indexOf(exist)
            state.itemCart[index].q += 1
        },
        decres(state, action) {

            const exist = state.itemCart.find((e) => {
                return e.id === action.payload.id
            })
            const index = state.itemCart.indexOf(exist)
            state.itemCart[index].q -= 1
            if (state.itemCart[index].q < 1) { state.itemCart[index].q = 1 }
        },
        show(state, action) {
            state.show = false
        }

    }
})
export const { add, deleat, incres, decres, show } = CartSlice.actions
export default CartSlice.reducer
