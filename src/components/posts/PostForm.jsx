import UsersList from "../users/UsersList";
import PropTypes from "prop-types";

const PostForm = ({
    title,
    content,
    userId,
    fieldChanges,
    onSavePostClicked,
    canSave,
}) => {
    const { onTitleChanged, onContentChanged, onAuthorChanged } = fieldChanges;
    console.log(title);
    return (
        <section>
            <h2 className="font-bold uppercase">Add a New Post</h2>
            <div>
                <form>
                    {/*Título del post*/}
                    <label htmlFor="postTitle">Post Title: </label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged()}
                    />
                    {/*Autor del post*/}
                    <label htmlFor="Author">Author: </label>
                    <select
                        type="text"
                        id="Author"
                        name="Author"
                        value={userId}
                        onChange={onAuthorChanged()}
                    >
                        <UsersList />
                    </select>
                    {/*Contenido del post*/}
                    <label htmlFor="postTitle">Content: </label>
                    <input
                        type="text"
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged()}
                    />
                    <button
                        className={!canSave ? "bg-red-200" : "bg-green-100"}
                        onClick={onSavePostClicked}
                        type="button"
                        disabled={!canSave}
                    >
                        Save Post
                    </button>
                </form>
            </div>
        </section>
    );
};

PostForm.propTypes = {
    title: PropTypes.string,
    userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    content: PropTypes.string,
    fieldChanges: PropTypes.objectOf(PropTypes.func),
    onSavePostClicked: PropTypes.func,
    canSave: PropTypes.bool,
};

export default PostForm;
