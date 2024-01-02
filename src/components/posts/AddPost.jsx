import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../../features";
import PostForm from "./PostForm"

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");
    const dispatch = useDispatch();
    // const unifiedData = [title, content, userId]
    
    const fieldChanges = {
        onTitleChanged: () => (e) => setTitle(e.target.value),
        onContentChanged: () => (e) => setContent(e.target.value),
        onAuthorChanged:() => (e) => setUserId(e.target.value),
    }
    
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, Number(userId)));
            setTitle("");
            setContent("");
        }
    };

    //Esta variable se usa en conjunto con la propiedad disabled, para activar o no el boton de enviar el post
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    return (
        <>
            <PostForm title={title} content={content} userId={userId} fieldChanges={fieldChanges} onSavePostClicked={onSavePostClicked} canSave= {canSave}/>
        </>
    );
};

export default AddPost;
