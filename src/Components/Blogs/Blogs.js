import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>What is Conetext API?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of the application.</p>
            </div>
            <div>
                <h1>What is Semantic Tags?</h1>
                <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.Elements such as header, footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed.That's why semantic tags were introduced.</p>
            </div>
        </div>

    );
};

export default Blogs;