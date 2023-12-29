import { useState } from "react";
import { useDispatch} from "react-redux";
import { postAdded} from "../../features";
import UsersList from "../users/UsersList";


const AddPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");
    const dispatch = useDispatch()

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if(title && content) {
            dispatch(
                postAdded(title, content, Number(userId) )
            )
            setTitle("")
            setContent("")
        }
    }

    //Esta variable se usa en conjunto con la propiedad disabled, para activar o no el boton de enviar el post
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    return (
        <>
            <section>
                <h2 className="font-bold uppercase">Add a New Post</h2>
                <form>
                    {/*Título del post*/}
                    <label htmlFor="postTitle">Post Title: </label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                        />
                    {/*Autor del post*/}
                    <label htmlFor="Author">Author: </label>
                    <select 
                        type="text"
                        id="Author"
                        name="Author"
                        value={userId}
                        onChange={onAuthorChanged}>
                        <UsersList/>  
                    </select>
                    {/*Contenido del post*/}    
                    <label htmlFor="postTitle">Content: </label>
                    <input
                        type="text"
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                        />
                    <button
                        className={!canSave ? "bg-red-200" : "bg-green-100"} 
                        onClick={onSavePostClicked} 
                        type="button"
                        disabled={!canSave}>
                    Save Post
                    </button>
                </form>
            </section>
        </>
    );
};

export default AddPost;
