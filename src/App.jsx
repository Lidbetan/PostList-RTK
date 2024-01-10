import AddPost from "./components/posts/AddPost";
import PostList from "./components/posts/PostList";

function App() {
    return (
        <>
            <div className="container m-auto">
                <h1 className="uppercase font-bold text-center my-9 text-lg md:text-xl lg:text-2xl">REDUX TOOLKIT PRACTICE</h1>
                <PostList />
                <AddPost />
            </div>
        </>
    );
}

export default App;
