
import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Laravel the best', body: 'Description'},
        {id: 2, title: 'Laravel the bes1', body: 'Description'},
        {id: 3, title: 'Laravel the 21bes2', body: 'Description'},
        {id: 4, title: 'Laravel the be21s3', body: 'Description'}
    ]);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [selectedSort, setSelectedSort ] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                    defaultValue="Sorting"
                    options={[
                        {value: 'title', name: 'By title'},
                        {value: 'body', name: 'By description'}

                    ]}
                />
            </div>
            {posts.length !== 0 ? <PostList remove={removePost} posts={posts} title = "Posts list" /> : <h1 style={{textAlign: "center"}}>Posts not found</h1>}
        </div>
    )
}

export default App;
