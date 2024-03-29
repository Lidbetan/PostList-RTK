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
        <section className="mt-8">
            <h2 className="font-bold font-serif text-center text-2xl md:text-2xl lg:text-4xl ">Add a New Post</h2>
            <div className="w-11/12 mx-auto p-4 my-9">
                <form
                    className="flex flex-col lg:grid grid-cols-[85px_200px_100px]  justify-center items-start w-11/12 mx-auto ">
                    {/*Título del post*/}
                    <label className="font-customFont" htmlFor="postTitle">Post Title: </label>
                    <input
                        className="w-full col-span-2 border-2 rounded border-indigo-400 mb-4"
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged()}
                    />
                    {/*Autor del post*/}
                    <label className="font-customFont" htmlFor="Author">Author: </label>
                    <select
                        className="w-full col-span-2 border-2 rounded border-indigo-500 mb-4"
                        type="text"
                        id="Author"
                        name="Author"
                        value={userId}
                        onChange={onAuthorChanged()}
                    >
                        <UsersList />
                    </select>
                    {/*Contenido del post*/}
                    <label className="font-customFont" htmlFor="postContent">Content: </label>
                    <textarea
                        className="col-span-2 border-2 rounded border-indigo-500 mb-4 w-full h-24"
                        type="text"
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged()}
                    />
                    <button
                        className={!canSave ? "bg-red-200 hover:bg-red-300 p-2 rounded-md font-customFont uppercase font-semibold w-full col-start-2 " : "bg-green-100 hover:bg-green-200 p-2 rounded-md uppercase font-customFont font-semibold w-full col-start-2"} 
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
