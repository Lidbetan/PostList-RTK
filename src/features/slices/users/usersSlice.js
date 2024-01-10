import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id: 0, name: ""},
    {id: 1, name: "User 1"},
    {id: 2, name: "User 2"},
    {id: 3, name: "User 3"}
]
export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
});

export const selectAllUsers = (state) => state.users

export const {} = usersSlice.actions;
