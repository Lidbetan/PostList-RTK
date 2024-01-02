import { RenderedPosts } from "./RenderedPosts";

const PostList = () => {
    return (
        <>
            <h1 className="uppercase font-bold text-center">Post List</h1>
            <section className="posts">
                <RenderedPosts />
            </section>
        </>
    );
};

export default PostList;
