//nanoid genera id aleatorios
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: "1",
        title: "Learning Redux toolkit",
        content: "I've heard good things.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            hearth: 0,
            rocket: 0,
            coffee: 0,
        },
    },
    {
        id: "2",
        title: "Slices...",
        content: "The more i say slice, the more i want pizza.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            hearth: 0,
            rocket: 0,
            coffee: 0,
        },
    },
];

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            /*Prepare pre-procesa el payload antes de que la action sea despachada*/
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            hearth: 0,
                            rocket: 0,
                            coffee: 0,
                        },
                    },
                };
            },
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.find((post) => post.id === postId);

            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        },
    },
});
//De esta forma si cambia el initial state, me evito tener que modificarlo en todos los componentes, solo lo modifico acá
export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;
