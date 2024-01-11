//nanoid genera id aleatorios
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: "1",
        title: "Post #1 ",
        content: "Non voluptate laborum culpa ad reprehenderit. Est commodo tempor velit ea aliquip fugiat adipisicing sint incididunt laboris. Pariatur laborum qui anim sint ullamco culpa ea exercitation cillum.",
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
        title: "Post #2",
        content: "Nulla anim sint cupidatat id esse duis consequat ut fugiat id. Fugiat occaecat laboris consectetur incididunt. Excepteur pariatur tempor nostrud ad. Aliqua eiusmod non labore adipisicing aliqua adipisicing enim duis velit cillum dolor cupidatat pariatur sint. Eiusmod consequat dolor cillum aliqua aliquip sint excepteur ipsum sunt laboris in exercitation. Ex adipisicing ea commodo aliqua. Occaecat velit anim reprehenderit enim eu consequat commodo aliquip esse labore eiusmod nulla quis ad.",
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
