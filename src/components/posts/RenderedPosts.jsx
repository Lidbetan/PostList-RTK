import { useSelector } from "react-redux";
import { selectAllPosts } from "../../features";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton"

export const RenderedPosts = () => {
    const posts = useSelector(selectAllPosts);
    // console.log(posts)
    //Crea un nuevo array a partir de posts y lo ordena de forma descendente en función de la fecha
    const orderedPost = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    return (
        <div>
            {orderedPost.map((post) => (
                <article key={post.id}>
                    <h2 className="font-semibold uppercase">{post.title}</h2>
                    <p>{post.content.substring(0, 100)}</p>
                    <p><PostAuthor userId={post.userId}/></p>
                    <TimeAgo timestamp={post.date}/>
                    <ReactionButton post={post}/>
                </article>
            ))}
        </div>
    );
};
