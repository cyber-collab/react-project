
import React, {useMemo,useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Laravel the best', body: 'Description'},
        {id: 2, title: 'Laravel the bes1', body: 'Description'},
        {id: 3, title: 'Laravel the 21bes2', body: 'Description'},
        {id: 4, title: 'Laravel the be21s3', body: 'Description'}
    ]);

    const [filter, setFilter] = useState({sort: '', search: ''})

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            console.log('bla bla')
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.search));
    }, [filter.search, sortedPosts]);

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter} />
            {posts.length !== 0 ? <PostList remove={removePost} posts={sortedAndSearchPosts} title = "Posts list" /> : <h1 style={{textAlign: "center"}}>Posts not found</h1>}
        </div>
    )
}

export default App;
