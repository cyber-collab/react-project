import React from 'react';

const CreatePost = () => {
    return (
        <div>
            <input type="text" placeholder="Title"/>
            <input type="text" placeholder="Description"/>
            <button type="submit">Add new post</button>
        </div>
    );
};

export default CreatePost;
