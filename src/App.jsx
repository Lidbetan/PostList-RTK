import AddPost from "./components/posts/AddPost";
import PostList from "./components/posts/PostList";

function App() {
    return (
        <>
            <div className="ml-4">
                <PostList />
                <AddPost />
            </div>
        </>
    );
}

export default App;
