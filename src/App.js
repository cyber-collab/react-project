
import React, {useRef, useState} from "react";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Laravel the best', body: 'Description'},
        {id: 2, title: 'Laravel the bes1', body: 'Description'},
        {id: 3, title: 'Laravel the 21bes2', body: 'Description'},
        {id: 4, title: 'Laravel the be21s3', body: 'Description'}
    ]);

    const [postsSecondary, setPostsSecondary] = useState([
        {id: 1, title: 'Python', body: 'Description'},
        {id: 2, title: 'Laravel the bes1', body: 'Description'},
        {id: 3, title: 'Laravel the 21bes2', body: 'Description'},
        {id: 4, title: 'Laravel the be21s3', body: 'Description'}
    ]);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const bodyInputRef = useRef();

    const  addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        };
        setPosts([...posts, newPost])
        console.log(newPost);
    }

    return (
        <div className="App">
            <form>
                <MyInput value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title"/>
                <MyInput value={body} onChange={e => setBody(e.target.value)} type="text" placeholder="Description"/>
                <MyButton onClick={addNewPost}>Add new post</MyButton>
            </form>
            <PostList posts={posts} title = "Post list 1" />
        </div>
    )
}

export default App;
