import { RenderedPosts } from "./RenderedPosts";

const PostList = () => {
    return (
        <>
            <h2 className="uppercase font-bold text-center my-4 md:text-lg lg:text-xl">Post List</h2>
            <section className="posts my-9">
                <RenderedPosts />
            </section>
        </>
    );
};

export default PostList;
