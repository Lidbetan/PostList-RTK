import { RenderedPosts } from "./RenderedPosts";

const PostList = () => {
    return (
        <>
            <h1 className="uppercase font-bold">Post List</h1>
            <div>
                <RenderedPosts />
            </div>
        </>
    );
};

export default PostList;
