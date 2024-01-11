import AddPost from "./components/posts/AddPost";
import PostList from "./components/posts/PostList";

function App() {
    return (
        <>
            <div className="container p-6 m-auto">
                <h1 className="font-customFont uppercase font-bold text-center mb-9 text-2xl md:text-3xl lg:text-4xl">REDUX TOOLKIT PRACTICE</h1>
                <PostList />
                <AddPost />
            </div>
        </>
    );
}

export default App;
