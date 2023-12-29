import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id: 0, name: ""},
    {id: 1, name: "Lucas Id Betan"},
    {id: 2, name: "Sofia Cesari"},
    {id: 3, name: "Agustín Id Betan"}
]
export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
});

export const selectAllUsers = (state) => state.users

export const {} = usersSlice.actions;
