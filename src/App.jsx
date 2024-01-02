import AddPost from "./components/posts/AddPost";
import PostList from "./components/posts/PostList";

function App() {
    return (
        <>
            <div className="container m-auto">
                <PostList />
                <AddPost />
            </div>
        </>
    );
}

export default App;
