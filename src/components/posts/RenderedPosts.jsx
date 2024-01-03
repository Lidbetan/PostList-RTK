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
        <div className="flex flex-col md:grid grid-cols-2 justify-center start gap-6 w-11/12 mx-auto my-4">
            {orderedPost.map((post) => (
                <article className= "flex flex-col gap-1 w-11/12 md:w-6/12 mx-auto p-1" key={post.id}>
                    <h2 className="font-semibold uppercase">{post.title}</h2>
                    <p className="text-justify">{post.content.substring(0, 100)}</p>
                    <p><PostAuthor userId={post.userId}/></p>
                    <TimeAgo timestamp={post.date}/>
                    <ReactionButton post={post}/>
                </article>
            ))}
        </div>
    );
};
