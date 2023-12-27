import { useSelector } from "react-redux";
import { selectAllPosts } from "../../features";

export const RenderedPosts = () => {
    const posts = useSelector(selectAllPosts);
    console.log(posts)

    return (
        <div>
            {posts.map((post) => (
                <article key={post.id}>
                    <h2 className="font-semibold uppercase">{post.title}</h2>
                    <p>{post.content.substring(0, 100)}</p>
                </article>
            ))}
        </div>
    );
};
