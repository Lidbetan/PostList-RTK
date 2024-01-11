import { RenderedPosts } from "./RenderedPosts";

const PostList = () => {
    return (
        <>
            <h2 className="font-serif font-bold text-center my-4 text-2xl md:text-2xl lg:text-4xl">Post List</h2>
            <section className="posts p-4 my-9">
                <RenderedPosts />
            </section>
        </>
    );
};

export default PostList;
