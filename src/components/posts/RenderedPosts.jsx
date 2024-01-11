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
        <div className="flex flex-col content-center md:flex-row flex-wrap justify-center start gap-4 md:gap-6 lg:gap-8 xl:gap-10 w-11/12 mx-auto my-4">
            {orderedPost.map((post) => (
                <article className= "flex flex-col gap-2 w-11/12 md:w-4/12 lg:w-4/12 xl:w-3/12 p-2 border-2 rounded-md divide-y divide-indigo-300 border-indigo-500" key={post.id}>
                    <h2 className="font-semibold font-serif text-lg ">{post.title}</h2>
                    <p className="text-justify font-mono">{post.content.substring(0, 200)}</p>
                    <p><PostAuthor userId={post.userId}/></p>
                    <TimeAgo timestamp={post.date}/>
                    <ReactionButton post={post}/>
                </article>
            ))}
        </div>
    );
};
