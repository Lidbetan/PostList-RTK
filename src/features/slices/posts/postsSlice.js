//nanoid genera id aleatorios
import { createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [
  {id: "1", title:"Learning Redux toolkit", content:"I've heard good things."},
  {id: "2", title:"Slices...", content:"The more i say slice, the more i want pizza."}
]

export const postsSlice = createSlice({
name: 'posts',
initialState,
reducers: {
    postAdded:{
      reducer(state, action) {
      state.push(action.payload)
    },
    /*Prepare pre-procesa el payload antes de que la action sea despachada*/
      prepare(title, content) {
        return {
          payload: {
            id:nanoid(),
            title,
            content
          }
        }
      }
  }
  },
});
//De esta forma si cambia el initial state, me evito tener que modificarlo en todos los componentes, solo lo modifico acá
export const selectAllPosts = (state => state.posts)

export const { postAdded } = postsSlice.actions;