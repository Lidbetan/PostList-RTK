import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../../features";

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch()

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    const onSavePostClicked = () => {
        if(title && content) {
            dispatch(
                postAdded(title, content)
            )
            setTitle("")
            setContent("")
        }
    }

    return (
        <>
            <section>
                <h2 className="font-bold uppercase">Add a New Post</h2>
                <form>
                    <label htmlFor="postTitle">Post Title: </label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                        />
                    <label htmlFor="postTitle">Content: </label>
                    <input
                        type="text"
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                        />
                    <button 
                        onClick={onSavePostClicked} 
                        type="button">
                    Save Post
                    </button>
                </form>
            </section>
        </>
    );
};

export default AddPost;
